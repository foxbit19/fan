import Assessment from './assessment.js';

export default interface Target {
    id: string;
    name: string;
    ip: string;
    assessment: Assessment;
}