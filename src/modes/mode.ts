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

    /**
     * Previous mode of the chain
     */
    public prevMode: Mode | null;

    constructor() {
        this.prevMode = null;
    }

    public payload(manager: CommandManager) {
        console.log(`Welcome to ${this.name} mode. This mode is under construction.`)
    }

    public get prompt(): Line {
        const prevPromptContent = this.prevMode && `${this.prevMode?.prompt.content} > `;
        return new Line(this.name, `${prevPromptContent}${chalk.hex(this.color).bold(this.name.toUpperCase())}`)
    }

    public get promptLine() {
        return `${this.prompt.content} > `;
    }
}