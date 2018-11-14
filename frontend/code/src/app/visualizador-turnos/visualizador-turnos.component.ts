import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Turno } from './Turno';
import { TurnosService } from '../turnos.service';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-visualizador-turnos',
  templateUrl: './visualizador-turnos.component.html',
  styleUrls: ['./visualizador-turnos.component.css']
})
export class VisualizadorTurnosComponent implements OnInit {

  @Input() turnos: Turno[];
  displayedColumns: string[] = ['horario', 'duracion', 'doctor', 'paciente'];
  @ViewChild(MatTable) table: MatTable<any>;
  constructor(private turnosService: TurnosService) { }

  ngOnInit() {
    this.turnos = this.turnosService.all();
  }

}
