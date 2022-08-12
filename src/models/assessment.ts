import Reconnnaissance from "./phases/reconnaissance.js";
import Scanning from './phases/scanning.js';
import GainingAccess from './phases/access.js';
import MaintainingAccess from './phases/maintain.js';
import Cover from './phases/cover.js';

export default interface Assessment {
    id: string;
    reconnaissance: Reconnnaissance;
    scanning: Scanning;
    gainingAccess: GainingAccess;
    maintainingAccess: MaintainingAccess;
    coveringTracks: Cover;
}