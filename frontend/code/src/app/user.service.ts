import { Injectable } from '@angular/core';
import { User } from './user-abm/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  all(): User[] {
    const users = [];
    users.push( new User(1, 'lrodriguez', 'lrodriguez@gmail.com', 'luciano', 'rodriguez') );
    users.push( new User(2, 'lgaldames', 'lgaldames@gmail.com', 'leonardo', 'galdames') );
    users.push( new User(3, 'mrusconi', 'mrusconi@gmail.com', 'maria', 'rusconi') );
    users.push( new User(4, 'rjimenez', 'rjimenez@gmail.com', 'ruben', 'jimenez') );
    return users;
  }
}

