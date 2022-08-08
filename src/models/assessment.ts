import Reconnnaissance from "./phases/reconnaissance";
import Scanning from './phases/scanning';
import GainingAccess from './phases/access';
import MaintainingAccess from './phases/maintain';
import Cover from './phases/cover';

export default interface Assessment {
    id: string;
    reconnaissance: Reconnnaissance;
    scanning: Scanning;
    gainingAccess: GainingAccess;
    maintainingAccess: MaintainingAccess;
    coveringTracks: Cover;
}