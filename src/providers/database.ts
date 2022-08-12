import { JsonDB } from "node-json-db";
import { Config } from "node-json-db/dist/lib/JsonDBConfig.js";

export default class Database {
    private static db: JsonDB = new JsonDB(new Config("fan", true));;

    public static async getAll(modelName: string) {
        return await this.db.getData(modelName);
    }

    public static async add(modelName: string, content: object) {
        await this.db.push(modelName, [content], false)
    }

    public static async get(modelName: string, id: string) : Promise<any> {
        return await this.db.getData(`${modelName}/${await this.db.getIndex(modelName, id)}`);
    }
}