import chalk from "chalk";
import Prompt from "./prompt";

export default class PromptProvider {
    private _prompts: Array<Prompt>;

    constructor() {
        this._prompts = [
            new Prompt('project', chalk.bgGreen.bold('PROJECT')),
            new Prompt('recon', chalk.bgBlue.bold('RECONNAISSANCE')),
            new Prompt('scanning', chalk.bgCyan.bold('SCANNING')),
            new Prompt('access', chalk.bgRed.bold('GAINING ACCESS')),
            new Prompt('maintain', chalk.bgMagenta.bold('MAINTAINING ACCESS')),
            new Prompt('cover', chalk.bgGray.bold('COVERING TRACKS')),
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