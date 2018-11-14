import { Component } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'turnero-app';

  constructor(public dialog: MatDialog,
    private authService: AuthService) { }

  openLogin() {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.authService.login(result.username, result.password);
      }
    });
  }
}

@Component({
  selector: 'app-login-dialog',
  templateUrl: 'login-dialog.html',
})
export class LoginDialogComponent {

  username = '';
  password = '';
  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>) {}

}
