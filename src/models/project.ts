import Target from "./target";

export default interface Project {
    id: string;
    name: string;
    targets: Array<Target>;
}