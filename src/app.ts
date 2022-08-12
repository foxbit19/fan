import { CommandManager } from './command/manager.js';

class App {
    constructor() {
        console.log('Welcome to FAN! Type help to show available commands.\n');
        new CommandManager();
    }
}

new App();