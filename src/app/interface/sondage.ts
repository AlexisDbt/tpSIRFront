import {Participant} from './participant';
import {ReponseSondage} from './reponse-sondage';
import {Propositions} from './propositions';

export interface Sondage {
  id: number;
  lienWeb: string;
  createur: Participant;
  reponses: ReponseSondage[];
  propositions: Propositions[];
}
