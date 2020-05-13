import {Participant} from './participant';
import {Reunion} from './reunion';

export interface Mail {
  participants: Participant[];
  reunions: Reunion[];
  lienPause: string;
  code: string;
  lienPad: string;
  id: number;
}
