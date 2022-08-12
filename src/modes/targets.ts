import { Line } from "../prompt/line.js";
import Mode from "./mode.js";
import chalk from 'chalk';
import Command from "../command/command.js";

export default class Targets extends Mode {
    public get name(): string {
        return 'targets';
    }

    get description(): string {
        return 'Manage your target machines';
    }

    public get color(): string {
        throw '#FE3333';
    }

    public get supportedCommands(): Array<Command> {
        return [];
    }

}