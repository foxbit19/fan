import AbstractCommand from "./abstractCommand";

export default class Help extends AbstractCommand {
    constructor() {
        super();

        this.addCommand('help', 'Print this screen')
        this.addCommand('add', 'Add a new assessment project')
        this.addCommand('exit', 'Get out of Fan')
    }
}