import Command from "../../command";
import { CommandManager } from "../../manager";

    export class Edit implements Command {
        get name(): string {
            return 'edit';
        }
        get description(): string {
            return 'Edit an existing project'
        }
        payload(manager: CommandManager): void {
            //
        }

    }