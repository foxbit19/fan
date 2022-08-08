import chalk from "chalk";
import Command from "../command/command";
import { Line } from "../prompt/line";
import Mode from "./mode";
import ProjectMode from "./project";
import Targets from "./targets";

export default class RootMode extends Mode {
    get description(): string {
        throw new Error("Method not implemented.");
    }

    public get name(): string {
        return 'welcome';
    }

    public get color(): string {
        return '#2E2E2E';
    }

    public get supportedCommands(): Array<Command> {
        return [new ProjectMode, new Targets];
    }
}