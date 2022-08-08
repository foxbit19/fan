import { printTable } from 'console-table-printer';
import Command from '../command';
import { CommandManager } from '../manager';

export namespace Commands {
    export class Help implements Command {
        get name(): string {
            return 'help';
        }

        get description(): string {
            return 'Print available commands';
        }

        payload(manager: CommandManager): void {
            printTable(manager.modeManager.currentMode.supportedCommands.map((command: Command) => ({command: command.name, description: command.description})))
        }
    }
}