import Assessment from './assessment';

export default interface Target {
    id: string;
    name: string;
    ip: string;
    assessment: Assessment;
}