import {Component, OnInit, Input, ViewChild, Inject} from '@angular/core';
import { Turno } from './Turno';
import { TurnosService } from '../turnos.service';
import { MatTable } from '@angular/material/table';
import { UserService } from '../user.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import {User} from '../user-abm/User';
import {Medico} from "./Medico";
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-visualizador-turnos',
  templateUrl: './visualizador-turnos.component.html',
  styleUrls: ['./visualizador-turnos.component.css']
})
export class VisualizadorTurnosComponent implements OnInit {

  @Input() turnos: Turno[];
  users: any;
  user: any;
  medicos: any;
  displayedColumns: string[] = ['horario', 'duracion', 'doctor', 'paciente'];
  @ViewChild(MatTable) table: MatTable<any>;
  constructor(public authService: AuthService, private turnosService: TurnosService, private userService: UserService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.turnos = this.turnosService.all();
    this.users = this.userService.all();
    this.user = this.authService.getUser();
  }

  newTurn() {
    console.log('solicitar turno');
    const dialogRef = this.dialog.open(CreateTurnDialogComponent, {
      width: '500px',
      data: new Turno()
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
        const paciente = new User(4, 'rjimenez', 'rjimenez@gmail.com', 'ruben', 'jimenez', 'Paciente');
        const turno = new Turno(result.inicio, result.duracion, result.medico, paciente)
        this.turnos.push(turno);
        this.table.renderRows();
      }
    });
  };
}

@Component({
  selector: 'app-create-turn-dialog',
  templateUrl: 'create-turn-dialog.html',
})
export class CreateTurnDialogComponent {

  public selected;
  public users;
  public user;
  public medicos;
  constructor(
    public dialogRef: MatDialogRef<CreateTurnDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Turno, public userService: UserService, public authService: AuthService) {
    this.medicos = [
      { value: new Medico(2, 'lgaldames', 'lgaldames@gmail.com', 'leonardo', 'galdames', 'Traumatología') },
      { value: new Medico(3, 'nlercari', 'nlercari@gmail.com', 'nicolas', 'lercari', 'Kinesiologo') }
    ];
    this.selected = this.medicos[0].value;
    this.user = this.authService.getUser();
  }



}

