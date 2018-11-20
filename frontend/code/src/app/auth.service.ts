import { Injectable } from '@angular/core';
import { User } from './user-abm/User';
import { StoreService } from './store.service';

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private storeService: StoreService,
    private userService: UserService) { }

  login(username, password): User {
    const user = this.userService.getUser(username);
    if (user) {
      this.storeService.loggedIn = true;
      this.storeService.user = user;
      this.router.navigate(['/home']);
      return user;
    }
  }

  logout() {
    this.storeService.loggedIn = false;
    this.storeService.user = {};
    this.router.navigate(['/init']);
  }

  getUser() {
    return this.storeService.user;
  }
}
