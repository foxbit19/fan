import readline from 'readline'
import { Provider } from './provider.js';

export namespace Prompt {
    export class Manager {
        private rl: readline.Interface;
        private provider: Provider;
        private ethicalHackingPhases = ['recon', 'scanning', 'access', 'maintain', 'cover']
        private phasesIndex = 0;

        constructor(readLine: readline.Interface) {
            this.rl = readLine;
            this.provider = new Provider();
            this.rl.setPrompt(this.provider.get());
            this.rl.prompt();
        }

        public switch(promptName: string) {
            this.rl.setPrompt(this.provider.get(promptName));
        }

        public startAssessment() {
            this.switch(this.ethicalHackingPhases[0]);
        }

        public nextAssessmentPhase() {
            this.switch(this.ethicalHackingPhases[++this.phasesIndex]);
        }
    }
}