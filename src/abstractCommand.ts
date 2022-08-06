import Command from './command';

export default abstract class AbstractCommand {
    private commands: Array<Command>;

    constructor() {
        this.commands = [];
    }

    protected addCommand(name: string, description: string) {
        this.commands.push(new Command(name, description));
    }

    public printCommands() {
        for (const command of this.commands) {
            console.log(command.name,' - ', command.description)
        }
    }
}