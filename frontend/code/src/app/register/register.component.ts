import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-register',
    templateUrl: 'register.component.html',
    styleUrls: ['./register.component.css']
})



export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor() { }

    register() {
        this.loading = true;
        const end = +(new Date()) + 1000;
        while( +(new Date()) < end ){ } 
        this.clear();
    }
 
    clear() {
      alert("Registro exitoso");
      this.loading = false;
    }
  
}
