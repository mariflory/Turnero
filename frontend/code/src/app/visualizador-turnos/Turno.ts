import { Medico } from './Medico';
import { User } from '../user-abm/User';

export class Turno {
  inicio: Date;
  duracion: number;
  medico: Medico;
  paciente: User;

  constructor(inicio?, duracion?, medico?, user?) {
    this.inicio = inicio;
    this.duracion = duracion;
    this.medico = medico;
    this.paciente = user;
  }
}
