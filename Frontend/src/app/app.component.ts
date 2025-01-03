import { NgForOf, NgIf } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorService } from './error.service';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LoginComponent,
    DashboardComponent,
    NgIf,
    NgForOf,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  showErrorPopup: boolean = false;
  errorMessage: string = '';
  private errorSubscription!: Subscription;

  constructor(private errorService: ErrorService) {
    this.errorSubscription = this.errorService.errorMessage$.subscribe((message) => {
      if (message) {
        this.errorMessage = message;
        this.showErrorPopup = true;
      } else {
        this.showErrorPopup = false;
      }
    });
  }

  closeErrorPopup() {
    this.errorService.clearError();
    window.location.reload();
  }


  ngOnDestroy(): void {
    this.errorSubscription.unsubscribe();
  }
}
