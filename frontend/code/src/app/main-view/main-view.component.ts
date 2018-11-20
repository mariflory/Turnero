import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  constructor(
    private router: Router,
    private storeService: StoreService,
  ) { }

  ngOnInit() {
    if (!this.storeService.user) {
      this.router.navigate(['/init']);
    }
  }

}
