import { NgForOf, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    HttpClientModule,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading: boolean = false;
  isLoginVisible: boolean = true;

  username: string = "";
  password: string = "";
  loginMessage: string = "";
  loginErrorMessage: string = "";

  registerName: string = "";
  registerEmail: string = "";
  registerPhone: string = "";
  registerCity: string = "";
  registerUsername: string = "";
  registerPassword: string = "";
  registerMessage: string = "";

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}

  showLogin() {
    this.isLoginVisible = true;
  }

  showRegister() {
    this.isLoginVisible = false;
  }

  login() {
    this.loading = true;
    const loginData = {
      username: this.username,
      password: this.password
    };

    this.http.post<boolean>('http://localhost:8080/login', loginData).subscribe(response => {
      if (response) {
        setTimeout(() => {
          this.loginMessage = 'Eingeloggt!';
          this.loginErrorMessage = "";
          this.registerMessage = "";
          this.loading = false;
          this.authService.login();
          this.router.navigate(['/Dashboard']);
        }, 1000);
      }
    }, error => {
      this.loginMessage = "";
      this.loginErrorMessage = 'Benutzer oder Passwort ist falsch!';
      this.loading = false;
    });
  }

  register() {
    const registerData = {
      name: this.registerName,
      email: this.registerEmail,
      phone: this.registerPhone,
      city: this.registerCity,
      username: this.registerUsername,
      password: this.registerPassword
    };

    this.http.post('http://localhost:8080/register', registerData, { responseType: 'text' }).subscribe(response => {
      this.registerMessage = response;
    }, error => {
      console.error('Error:', error);
      this.registerMessage = 'Ein Fehler ist aufgetreten!';
    });
    this.registerMessage = 'Benutzer wurde erstellt.';
    this.loginMessage = "";
    this.loading = true;
    setTimeout(() => {
      this.registerName = "";
      this.registerEmail = "";
      this.registerPhone = "";
      this.registerCity = "";
      this.registerUsername = "";
      this.registerPassword = "";
      this.isLoginVisible = true;
      this.loading = false;
    }, 2000);
  }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/Dashboard']);
    }
  }
}

