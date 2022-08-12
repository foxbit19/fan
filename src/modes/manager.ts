import Mode from "./mode.js";
import RootMode from "./root.js";

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