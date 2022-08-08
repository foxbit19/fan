import { CommandManager } from "./manager";

export default interface Command {
    /**
     * Gets the name of the command
     */
    get name(): string;
    /**
     * Gets the description of the command
     */
    get description(): string;
    /**
     * Contains all the logic of the command
     * @param manager command manager
     */
    payload(manager: CommandManager): void;
}