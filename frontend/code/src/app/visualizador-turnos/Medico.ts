import { User } from '../user-abm/User';

export class Medico extends User {
  especialidad: string;

  constructor(id?, username?, email?, nombre?, apellido?, especialidad?) {
    super(id, username, email, nombre, apellido, 'Medico');
    this.especialidad = especialidad;
  }

  public toString = () => {
    return `User (id: ${this.id}, username: ${this.username},
      email: ${this.email}, nombre: ${this.nombre},
      apellido: ${this.apellido}, rol: ${this.rol},
      especialidad: ${this.especialidad})`;
  }
}
