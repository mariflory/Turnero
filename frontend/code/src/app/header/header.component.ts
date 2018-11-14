import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() clickHeaderLogin: EventEmitter<any> = new EventEmitter();
  @Output() clickHeaderLogout: EventEmitter<any> = new EventEmitter();

  constructor(private storeService: StoreService) { }

  ngOnInit() {
  }

}
