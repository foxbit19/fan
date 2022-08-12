import { randomUUID } from "crypto";
import Command from "../../command.js";
import { CommandManager } from "../../manager.js";
import { printTable } from 'console-table-printer';
import ProjectProvider from "../../../providers/project.js";

    export class Show implements Command {
        get name(): string {
            return 'show';
        }

        get description(): string {
            return 'Show all the stored projects'
        }

        async payload(manager: CommandManager): Promise<void> {
            console.log('Show all your projects')
            printTable((await ProjectProvider.getAll()).map((project: any) => ({ 'Project name': project.name })))
        }

    }