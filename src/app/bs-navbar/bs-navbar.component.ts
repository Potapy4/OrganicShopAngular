import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AppUser } from '../models/app-user';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnDestroy {
  appUser: AppUser;
  appUserSub: Subscription;

  constructor(private auth: AuthService) {
    this.appUserSub = auth.appUser$.subscribe(appUser => this.appUser = appUser);
  }

  logout() {
    this.auth.logout();
  }

  ngOnDestroy() {
    this.appUserSub.unsubscribe();
  }
}
