import { randomUUID } from "crypto";
import Command from "../../command";
import { CommandManager } from "../../manager";
import { printTable } from 'console-table-printer';

    export class Show implements Command {
        get name(): string {
            return 'show';
        }

        get description(): string {
            return 'Show all the stored projects'
        }

        async payload(manager: CommandManager): Promise<void> {
            console.log('Show all your projects')
            printTable((await manager.db.getData('projects')).projects.map((project: any) => ({ 'Project name': project.name })))
        }

    }