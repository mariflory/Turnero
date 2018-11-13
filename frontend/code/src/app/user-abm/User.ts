export class User {
  id: number;
  username: string;
  email: string;
  nombre: string;
  apellido: string;

  constructor(id, username, email, nombre, apellido) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.nombre = nombre;
    this.apellido = apellido;
  }

  public toString = () => {
    return `User (id: ${this.id}, username: ${this.username}, email: ${this.email}, nombre: ${this.nombre}, apellido: ${this.apellido})`;
  }
}
