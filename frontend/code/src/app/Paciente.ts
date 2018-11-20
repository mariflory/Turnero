import { User } from './user-abm/User';

export class Paciente extends User {
  dni: string;
  constructor(id?, username?, email?, nombre?, apellido?, dni?) {
    super(id, username, email, nombre, apellido, 'Paciente');
    this.dni = dni;
  }

  public toString = () => {
    return `User (id: ${this.id}, username: ${this.username},
      email: ${this.email}, nombre: ${this.nombre},
      apellido: ${this.apellido}, rol: ${this.rol},
      dni: ${this.dni})`;
  }
}
