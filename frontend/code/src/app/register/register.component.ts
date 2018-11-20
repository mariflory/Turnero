import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
    selector: 'app-register',
    templateUrl: 'register.component.html',
    styleUrls: ['./register.component.css']
})



export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(private userService: UserService) { }

    register() {
        var expReg =/^.*@.*\.com/;
        this.loading = true;
        const end = +(new Date()) + 500;
        while( +(new Date()) < end ){ }
        
        if(this.model.repeat === this.model.password
          && expReg.exec(this.model.email) && this.model.password.length >= 6){
            this.userService.addUser(this.model.email);
            this.clear();
        }else{
          alert("Error en el Registro, vuelva a intentarlo");
        }
        
    }
 
    clear() {
      alert("Registro exitoso");
      this.loading = false;
      location.reload();
    }
  
}
