import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  loggedIn = false;
  user = undefined;
  constructor() { }

}
