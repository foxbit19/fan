import readline from 'readline'
import ModesManager from '../modes/manager';
import { Prompt } from '../prompt/manager';
import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig';
import { Commands } from './commands/help';
import Mode from '../modes/mode';

export class CommandManager {
    private rl: readline.Interface;
    private promptManager: Prompt.Manager;
    private _modeManager: ModesManager;
    private _db: JsonDB;

    constructor() {
        this._db = new JsonDB(new Config("fan", true));

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

    public get db() {
        return this._db;
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
                for (const supportedCommand of this.modeManager.currentMode.supportedCommands) {
                    if (supportedCommand.name === command.trim()) {
                        if (supportedCommand instanceof Mode) {
                            this._modeManager.currentMode = <Mode>supportedCommand;
                        }
                        await supportedCommand.payload(this);
                    }
                }
                break;
        }

        this.rl.prompt();
    }
}