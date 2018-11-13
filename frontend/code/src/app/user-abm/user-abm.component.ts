import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { User } from './User';
import { MatTable } from '@angular/material/table';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-user-abm',
  templateUrl: './user-abm.component.html',
  styleUrls: ['./user-abm.component.css']
})
export class UserAbmComponent implements OnInit {

  users: User[];
  editing;
  displayedColumns: string[] = ['username', 'email', 'nombre', 'apellido', 'actions'];
  @ViewChild(MatTable) table: MatTable<any>;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.all();
    this.editing = {};
  }

  enableEdit(element) {
    this.editing[element.id] = new User(element.id, element.username, element.email, element.nombre, element.apellido);
  }

  saveEdit(element) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id === element.id) {
        this.users[i] = element;
      }
    }
    this.table.renderRows();
    delete this.editing[element.id];
  }

  deleteRow(element) {
    const index = this.users.findIndex(user => user.id === element.id);
    this.users.splice(index, 1);
    this.table.renderRows();
  }

  cancelEdit(element) {
    delete this.editing[element.id];
  }
}
