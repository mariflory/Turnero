import { Injectable } from '@angular/core';
import { Turno } from './visualizador-turnos/Turno';
import { Medico } from './visualizador-turnos/Medico';
import { User } from './user-abm/User';

@Injectable({
  providedIn: 'root'
})
export class TurnosService {

  constructor() { }

  all() {
    const turnos = [];
    const med = new Medico(2, 'lgaldames', 'lgaldames@gmail.com', 'leonardo', 'galdames', 'Traumatología');
    const paciente = new User(4, 'rjimenez', 'rjimenez@gmail.com', 'ruben', 'jimenez', 'Paciente');
    turnos.push(new Turno(new Date('2018-12-01T10:00:00'), 15, med, paciente));
    turnos.push(new Turno(new Date('2018-12-01T10:15:00'), 15, med, paciente));
    turnos.push(new Turno(new Date('2018-12-01T10:30:00'), 15, med, paciente));
    turnos.push(new Turno(new Date('2018-12-01T10:45:00'), 15, med, paciente));
    return turnos;
  }
}
