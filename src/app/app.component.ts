import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService: AuthService,
              private router: Router){}

  title = 'Stakhanov';
  calendarSelected = false;
  teamSelected = false;
  registrySelected = false;
  dashSelected = true;

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
