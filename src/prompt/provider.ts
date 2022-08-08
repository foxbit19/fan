import chalk from "chalk";
import { Line } from "./line";

export class Provider {
    private _prompts: Array<Line>;

    constructor() {
        this._prompts = [
            new Line('recon', chalk.bgBlue.bold('RECONNAISSANCE')),
            new Line('scanning', chalk.bgCyan.bold('SCANNING')),
            new Line('access', chalk.bgRed.bold('GAINING ACCESS')),
            new Line('maintain', chalk.bgMagenta.bold('MAINTAINING ACCESS')),
            new Line('cover', chalk.bgGray.bold('COVERING TRACKS')),
        ];
    }

    public get(name?: string) {
        if (!name) {
            return '> ';
        }

        for (const prompt of this._prompts) {
            if (prompt.name === name.trim()) {
                return `${prompt.content} > `;
            }
        }

        return '> ';
    }
}
