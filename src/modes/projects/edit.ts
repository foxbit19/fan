import inquirer from "inquirer";
import ProjectProvider from "../../providers/project.js";
import Command from "../../command/command.js";
import { CommandManager } from "../../command/manager.js";
import Mode from "../mode.js";
import Project from "../../models/project.js";
import chalk from "chalk";
import Targets from "../targets.js";

export class Edit extends Mode {
    public get color(): string {
        return '#00aaff';
    }

    public get supportedCommands(): Command[] {
        return [new Targets];
    }

    get name(): string {
        return 'edit';
    }

    get description(): string {
        return 'Edit an existing project'
    }

    public get promptLine() {
        return `${this.prompt.content} > ${chalk.green.bold(ProjectProvider.currentProject.name.toUpperCase())} > `;
    }

    async payload(manager: CommandManager): Promise<void> {
        try {

            const answer = await inquirer.prompt([
                {
                    type: 'list',
                    loop: false,
                    name: 'projectId',
                    message: "Select a project to edit",
                    choices: (await ProjectProvider.getAll()).map((project: Project) => ({name: project.name, value: project.id})),
                },
            ])

            ProjectProvider.currentProject = await ProjectProvider.get(answer.projectId);
        } catch (error) {
           console.error(error)
        }
    }

}