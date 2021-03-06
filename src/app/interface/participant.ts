import {Mail} from './mail';
import {Sondage} from './sondage';
import {Reunion} from './reunion';

export interface Participant {
  email: string;
  nom: string;
  prenom: string;
  allergie: string;
  preferenceAlim: string;
  mails: Mail[];
  sondages: Sondage[];
  reunions: Reunion[];
}
