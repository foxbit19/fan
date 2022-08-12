import { randomUUID } from "crypto";
import ProjectProvider from "../../../providers/project.js";
import Command from "../../command.js";
import { CommandManager } from "../../manager.js";

    export class Add implements Command {
        get name(): string {
            return 'add';
        }

        get description(): string {
            return 'Add a new project'
        }

        payload(manager: CommandManager): void {
            manager.readline.question('Type the project name: ', async (name:string) => {
                if (name.length === 0) {
                    console.log('No project added');
                } else {
                    await ProjectProvider.add({ id: randomUUID(), name })
                    console.log(`Project ${name} was added successfully!`)
                }

                manager.readline.prompt()
            })
        }

    }