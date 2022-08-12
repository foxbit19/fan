import Project from "../models/project.js";
import Database from "./database.js";

export default class ProjectProvider
{
    public static async getAll(): Promise<Array<Project>> {
        return (await Database.getAll('projects')).projects;
    }

    public static async add(project: Project) {
        await Database.add('/projects', project);
    }
}