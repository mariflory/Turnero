import { Injectable } from '@angular/core';
import { User } from './user-abm/User';
import { Medico } from './visualizador-turnos/Medico';
import { Paciente } from './Paciente';

var USERS = [
  new User(1, 'lrodriguez', 'lrodriguez@gmail.com', 'luciano', 'rodriguez', 'Administrador'),
  new Medico(2, 'lgaldames', 'lgaldames@gmail.com', 'leonardo', 'galdames', 'Traumatología', 15),
  new User(3, 'mrusconi', 'mrusconi@gmail.com', 'maria', 'rusconi', 'Administrador'),
  new User(4, 'rjimenez', 'rjimenez@gmail.com', 'ruben', 'jimenez', 'Asistente'),
  new Medico(5, 'nlercari', 'nlercari@gmail.com', 'nicolas', 'lercari', 'Kinesiología', 30),
  new Paciente(6, 'jperez', 'jperez@gmail.com', 'juan', 'perez', '12345678'),
];

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor() { }

  addUser(username :string){
    var index = USERS.length+1;
    USERS.push(new User(index, username, 'lrodriguez@gmail.com', 'luciano', 'rodriguez', 'Administrador'),);
    console.log(USERS);
  }

  all(): User[] {
    console.log(USERS);
    return USERS.filter(user => user.rol !== 'Paciente');
  }

  allMedicos(): Medico[] {
    console.log(USERS.filter(user => user.rol === 'Medico') as Medico[]);
    return USERS.filter(user => user.rol === 'Medico') as Medico[];
  }

  getUser(username: string): User {
    console.log(USERS.find(user => user.username === username));
    return USERS.find(user => user.username === username);
  }

  updateUser(user: User) {
    const index = USERS.findIndex(u => user.id === u.id );
    USERS[index] = user;
  }
}

