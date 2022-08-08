import Command from "../../command";
import { CommandManager } from "../../manager";

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