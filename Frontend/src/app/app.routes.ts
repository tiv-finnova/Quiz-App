import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExampleTest2Component } from './example-test-2/example-test-2.component';
import { ExampleTestComponent } from './example-test/example-test.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path: 'Quiz/1', component: ExampleTestComponent },
  { path: 'Quiz/2', component: ExampleTest2Component },
  { path: 'Login', component: LoginComponent },
  { path: 'Dashboard', component: DashboardComponent},
];
