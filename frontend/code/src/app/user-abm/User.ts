export class User {
  id: number;
  username: string;
  email: string;
  nombre: string;
  apellido: string;
  rol: string;

  constructor(id?, username?, email?, nombre?, apellido?, rol?) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.nombre = nombre;
    this.apellido = apellido;
    this.rol = rol;
  }

  public toString = () => {
    return `User (id: ${this.id}, username: ${this.username},
      email: ${this.email}, nombre: ${this.nombre},
      apellido: ${this.apellido}, rol: ${this.rol})`;
  }
}
