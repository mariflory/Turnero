import { Component, OnInit, Input, ViewChild, Inject } from '@angular/core';
import { Turno } from './Turno';
import { TurnosService } from '../turnos.service';
import { MatTable } from '@angular/material/table';
import { UserService } from '../user.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { User } from '../user-abm/User';
import { Medico } from './Medico';
import { AuthService } from '../auth.service';
import { FormControl } from '@angular/forms';
import { StoreService } from '../store.service';


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
  constructor(
    public authService: AuthService,
    private turnosService: TurnosService,
    private userService: UserService,
    private storeService: StoreService,
    public dialog: MatDialog) {
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
        const turno = new Turno(result.inicio, result.duracion, result.medico, this.storeService.user);
        this.turnos.push(turno);
        this.turnos.sort((a, b) => a.inicio.getTime() - b.inicio.getTime());
        this.table.renderRows();
      }
    });
  }
}

@Component({
  selector: 'app-create-turn-dialog',
  templateUrl: 'create-turn-dialog.html',
})
export class CreateTurnDialogComponent implements OnInit {

  medicos: Medico[];
  time = { hour: 0, minute: 30 };
  date = new FormControl(new Date());
  constructor(
    public dialogRef: MatDialogRef<CreateTurnDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Turno,
    public userService: UserService,
    public authService: AuthService) { }

  ngOnInit() {
    this.medicos = this.userService.allMedicos();
  }

  close() {
    this.data.inicio = this.date.value;
    this.data.inicio.setHours(this.time.hour);
    this.data.inicio.setMinutes(this.time.minute);
    this.data.inicio.setSeconds(0);
    this.data.duracion = this.data.medico.duracionAtencion;
    this.dialogRef.close(this.data);
  }
}
