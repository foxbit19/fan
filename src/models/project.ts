import Target from "./target.js";

export default interface Project {
    id: string;
    name: string;
    targets?: Array<Target>;
}