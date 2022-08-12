import readline from 'readline'
import ModesManager from '../modes/manager.js';
import { Prompt } from '../prompt/manager.js';
import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig.js';
import { Commands } from './commands/help.js';
import Mode from '../modes/mode.js';

export class CommandManager {
    private rl: readline.Interface;
    private promptManager: Prompt.Manager;
    private _modeManager: ModesManager;

    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this.promptManager = new Prompt.Manager(this.rl);
        this._modeManager = new ModesManager();
        this.init();
    }

    public get modeManager() {
        return this._modeManager;
    }

    public get readline() {
        return this.rl;
    }

    private init() {
        this.rl.on('line', this.handle.bind(this)).on('close', function () {
            console.log('\nHave a great day!');
            process.exit(0);
        });
    }

    private async handle(command: string) {
        if (command.trim().length === 0) {
            return;
        }

        switch (command.trim()) {
            case 'help':
                new Commands.Help().payload(this);
                break;
            case 'exit':
                this.rl.close();
                break;
            default:
                // load available commands based on current mode
                this.rl.pause();
                for (const supportedCommand of this.modeManager.currentMode.supportedCommands) {
                    if (supportedCommand.name === command.trim()) {
                        await supportedCommand.payload(this);

                        if (supportedCommand instanceof Mode) {
                            supportedCommand.prevMode = this._modeManager.currentMode.name !== 'welcome' ? this._modeManager.currentMode : null;
                            this._modeManager.currentMode = <Mode>supportedCommand;
                            this.rl.setPrompt(supportedCommand.promptLine);
                        }
                    }
                }
                this.rl.resume();
                break;
            }

            this.rl.prompt();
    }
}