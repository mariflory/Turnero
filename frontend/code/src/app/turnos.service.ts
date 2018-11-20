import { Injectable } from '@angular/core';
import { Turno } from './visualizador-turnos/Turno';
import { Medico } from './visualizador-turnos/Medico';
import { User } from './user-abm/User';
import { StoreService } from './store.service';
import { Paciente } from './Paciente';

const MED = new Medico(2, 'lgaldames', 'lgaldames@gmail.com', 'leonardo', 'galdames', 'Traumatología', 15);
const MED2 = new Medico(5, 'nlercari', 'nlercari@gmail.com', 'nicolas', 'lercari', 'Kinesiología', 30);
const PACIENTE = new Paciente(6, 'jperez', 'jperez@gmail.com', 'juan', 'perez', '12345678');

const TURNOS = [
  new Turno(new Date('2018-12-01T10:00:00'), 15, MED, PACIENTE),
  new Turno(new Date('2018-12-01T10:15:00'), 15, MED, PACIENTE),
  new Turno(new Date('2018-12-01T10:30:00'), 15, MED, PACIENTE),
  new Turno(new Date('2018-12-01T10:45:00'), 30, MED2, PACIENTE),
];
@Injectable({
  providedIn: 'root'
})
export class TurnosService {

  constructor( private storeService: StoreService) { }

  all() {
    const user: User = this.storeService.user;
    if ( user.rol === 'Asistente' || user.rol === 'Administrador') {
      return TURNOS;
    }
    if ( user.rol === 'Medico') {
      return TURNOS.filter(turno => turno.medico.username === user.username);
    }
    return TURNOS.filter(turno => turno.paciente.username === user.username);
  }

}
