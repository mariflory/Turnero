import { Injectable } from '@angular/core';
import { User } from './user-abm/User';
import { StoreService } from './store.service';

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private storeService: StoreService) { }

  login(username, password) {
    const user = new User(1, 'lrodriguez', 'lrodriguez@gmail.com', 'luciano', 'rodriguez', 'Administrador');
    this.storeService.loggedIn = true;
    this.storeService.user = user;

    /**
     * mmmm
     */ 
    this.router.navigate(['/home']);
    //localStorage.setItem('currentUser', JSON.stringify(user));

    console.log(this.storeService);
    return ;
  }
}
