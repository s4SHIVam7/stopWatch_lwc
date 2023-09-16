
import { LightningElement} from 'lwc';

export default class stopWatch_lwc extends LightningElement {
    running = false;
    elapsedTime = 0;
    
    get startStopLabel() {
        return this.running ? 'Stop' : 'Start';
    }

    connectedCallback() {
        this.updateTime();
    }

    updateTime() {
        if (this.running) {
            this.elapsedTime += 1;
        }

        const MILLISECONDS = 1000;

        setTimeout(() => {
            this.updateTime();
        }, MILLISECONDS); 

    }

    toggleStartStop() {
        this.running = !this.running;
    }

    reset() {
        this.running = false;
        this.elapsedTime = 0;
    }
}
