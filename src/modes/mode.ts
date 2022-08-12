import Command from '../command/command.js';
import { Line } from '../prompt/line.js';
import readline from 'readline';
import chalk from 'chalk';
import { CommandManager } from '../command/manager.js';

export default abstract class Mode implements Command {
    public abstract get name(): string;
    abstract get description(): string;
    public abstract get color(): string;
    public abstract get supportedCommands(): Array<Command>;

    public payload(manager: CommandManager) {
        console.log(`Welcome to ${this.name} mode. This mode is under construction.`)
        manager.readline.setPrompt(this.promptLine);
    }

    public handleHelp(rl: readline.Interface) {
        if (this.supportedCommands.length === 0) {
            console.log('There are no available commands.')
        } else {
            console.log(`Available commands for ${this.name} mode:`)
            console.log(this.supportedCommands.map(command => (new (<any>command)()).name))
        }
    }

    private get prompt(): Line {
        return new Line(this.name, chalk.hex(this.color).bold(this.name.toUpperCase()))
    }

    private get promptLine() {
        return `${this.prompt.content} > `;
    }
}