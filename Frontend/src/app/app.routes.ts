import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExampleTestComponent } from './example-test/example-test.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path: 'Test-1', component: ExampleTestComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Dashboard', component: DashboardComponent},
];
