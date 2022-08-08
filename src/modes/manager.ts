import Mode from "./mode";
import RootMode from "./root";

export default class ModesManager {
    private current: Mode;

    constructor() {
        this.current = new RootMode();
    }

    public set currentMode(mode: Mode) {
        this.current = mode;
    }

    public get currentMode(): Mode {
        return this.current;
    }
}