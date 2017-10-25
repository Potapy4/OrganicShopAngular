import { Component, OnDestroy } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  private authSub: Subscription;

  constructor(private auth: AuthService, private router: Router, private userService: UserService) {
    this.authSub = auth.user$.subscribe(user => {
      if (!user) {
        return;
      }

      this.userService.save(user);

      let returnUrl = localStorage.getItem('returnUrl');
      if (!returnUrl) {
        return;
      }

      localStorage.removeItem('returnUrl');
      router.navigateByUrl(returnUrl);
    })
  }

  ngOnDestroy() {
    this.authSub.unsubscribe();
  }
}
