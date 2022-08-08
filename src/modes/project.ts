import Command from "../command/command";
import { Add } from "../command/commands/projects/add";
import { Delete } from "../command/commands/projects/delete";
import { Edit } from "../command/commands/projects/edit";
import { Show } from "../command/commands/projects/show";
import Mode from "./mode";

export default class ProjectMode extends Mode {
    get description(): string {
        return 'Manage your projects';
    }

    public get name(): string {
        return 'projects';
    }

    public get color(): string {
        return '#FEFEFE';
    }

    public get supportedCommands(): Array<Command> {
        return [new Add, new Edit, new Delete, new Show];
    }
}