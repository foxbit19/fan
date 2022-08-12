import inquirer from "inquirer";
import ProjectProvider from "../../../providers/project.js";
import Command from "../../command.js";
import { CommandManager } from "../../manager.js";

export class Edit implements Command {
    get name(): string {
        return 'edit';
    }

    get description(): string {
        return 'Edit an existing project'
    }

    async payload(manager: CommandManager): Promise<void> {
        try {

            const answer = await inquirer.prompt([
                {
                    type: 'list',
                    loop: false,
                    name: 'project',
                    message: "Select a project to edit",
                    choices: await ProjectProvider.getAll(),
                },
            ])

            //manager.readline.setPrompt(manager.readline.getPrompt() + ' / '+answer.project);
        } catch (error) {
           console.error(error)
        }
    }

}