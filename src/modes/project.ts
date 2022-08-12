import Command from "../command/command.js";
import { Add } from "../command/commands/projects/add.js";
import { Delete } from "../command/commands/projects/delete.js";
import { Edit } from "./projects/edit.js";
import { Show } from "../command/commands/projects/show.js";
import Mode from "./mode.js";

export default class ProjectMode extends Mode {
    get description(): string {
        return 'Manage your projects';
    }

    public get name(): string {
        return 'projects';
    }

    public get color(): string {
        return '#00ffff';
    }

    public get supportedCommands(): Array<Command> {
        return [new Add, new Edit, new Delete, new Show];
    }
}