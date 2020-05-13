import {Participant} from './participant';
import {Mail} from './mail';

export interface Reunion {
  id: number;
  intitule: string;
  resume: string;
  date: Date;
  participants: Participant[];
  mail: Mail;
}
