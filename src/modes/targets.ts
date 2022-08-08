import { Line } from "../prompt/line";
import Mode from "./mode";
import chalk from 'chalk';
import Command from "../command/command";

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