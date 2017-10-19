import { Component, OnDestroy } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  private authSub: Subscription;

  constructor(private auth: AuthService, router: Router) {
    this.authSub = auth.user$.subscribe(user => {
      if (user) {
        let returnUrl = localStorage.getItem('returnUrl');
        router.navigateByUrl(returnUrl);
      }
    })
  }

  ngOnDestroy() {
    this.authSub.unsubscribe();
  }
}
