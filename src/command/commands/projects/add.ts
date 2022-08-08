import { randomUUID } from "crypto";
import Command from "../../command";
import { CommandManager } from "../../manager";

    export class Add implements Command {
        get name(): string {
            return 'add';
        }
        get description(): string {
            return 'Add a new project'
        }
        payload(manager: CommandManager): void {
            manager.readline.question('Type the project name: ', name => {
                if (name.length === 0) {
                    console.log('No project added');
                } else {
                    manager.db.push('/projects', [{ id: randomUUID(),name }], false)
                    console.log(`Project ${name} was added successfully!`)
                }

                manager.readline.prompt()
            })
        }

    }