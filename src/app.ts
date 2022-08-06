import chalk from 'chalk';
import readline from 'readline'
import Help from './help';
import PromptProvider from './promptProvider';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const promptProvider = new PromptProvider();
const phases = ['recon', 'scanning', 'access', 'maintain', 'cover']
let phasesIndex = 0;

console.log('Welcome to FAN! Type help to show available commands.\n\n');

rl.setPrompt(promptProvider.get());
rl.prompt();

rl.on('line', command => {
    switch (command.trim()) {
        case 'exit':
            rl.close();
            break;
        case 'add':
            console.log('Switch to project mode...');
            rl.setPrompt(promptProvider.get('project'));
            break;
        case 'start':
            console.log('Start assessment...');
            rl.setPrompt(promptProvider.get(phases[0]));
            break;
        case 'next':
            rl.setPrompt(promptProvider.get(phases[++phasesIndex]));
            break;
        case 'help':
            new Help().printCommands();
            break;
        default:
            break;
    }

    rl.prompt();
}).on('close', function () {
    console.log('\nHave a great day!');
    process.exit(0);
});
