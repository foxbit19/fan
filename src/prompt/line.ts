export class Line {
    private _name: string;
    private _content: string;

    constructor(name: string, content: string) {
        this._name = name;
        this._content = content;
    }

    public get name(): string {
        return this._name;
    }

    public get content(): string {
        return this._content;
    }
}