import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAbmComponent } from './user-abm.component';

describe('UserAbmComponent', () => {
  let component: UserAbmComponent;
  let fixture: ComponentFixture<UserAbmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAbmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
