import { Injectable } from '@angular/core';
import { User } from './user-abm/User';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private storeService: StoreService) { }

  login(username, password) {
    const user = new User(1, 'lrodriguez', 'lrodriguez@gmail.com', 'luciano', 'rodriguez', 'Administrador');
    this.storeService.loggedIn = true;
    this.storeService.user = user;
    console.log(this.storeService);
    return ;
  }
}
