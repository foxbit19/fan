import Command from "../../command.js";
import { CommandManager } from "../../manager.js";

export class Delete implements Command {
    get name(): string {
        return 'del';
    }

    get description(): string {
        return 'Delete an existing project'
    }

    payload(manager: CommandManager): void {
        //
    }

}