import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';
import { User } from '../user-abm/User';
import { Medico } from '../visualizador-turnos/Medico';
import { Paciente } from '../Paciente';
import { UserService } from '../user.service';

@Component({
  selector: 'app-configuraciones',
  templateUrl: './configuraciones.component.html',
  styleUrls: ['./configuraciones.component.css']
})
export class ConfiguracionesComponent implements OnInit {

  user: User;
  userStore: User;
  constructor(
    private storeService: StoreService,
    private userService: UserService
  ) { }

  ngOnInit() {
    const userAux = this.storeService.user;
    if (userAux.rol === 'Medico') {
      this.user = new Medico(userAux.id, userAux.username, userAux.email, userAux.nombre,
        userAux.apellido, userAux.especialidad, userAux.duracionAtencion);
    } else if (userAux.rol === 'Paciente') {
      this.user = new Paciente(userAux.id, userAux.username, userAux.email, userAux.nombre,
        userAux.apellido, userAux.dni);
    } else {
      this.user = new User(userAux.id, userAux.username, userAux.email, userAux.nombre,
        userAux.apellido, userAux.rol);
    }
    this.userStore = userAux;
  }

  guardarCambios() {
    this.storeService.user = this.user;
    this.userService.updateUser(this.user);
  }
}
