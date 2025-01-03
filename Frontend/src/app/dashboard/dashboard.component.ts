import { NgForOf, NgIf, NgStyle } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatIconModule } from '@angular/material/icon';
import { ErrorService} from '../error.service';

interface Task {
  id: number;
  quizName: string;
  quizVersion: number;
  quizLevel: number;
  quizDate: number;
}


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    NgStyle,
    MatIconModule,
    HttpClientModule,
    MatButtonModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  tasks: Task[] = [];
  hasError = true;
  @Output() errorEvent = new EventEmitter<string>();
  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService,
    private errorService: ErrorService
  ) {}

  ngOnInit(): void {
    this.fetchTasks();
  }

  fetchTasks(): void {
    this.http.get<Task[]>('http://localhost:8080/api/quiz/dashboard').subscribe({
      next: (data) => {
        this.hasError = false;
        this.tasks = data;
      },
      error: () => {
        this.hasError = true;
        this.errorService.triggerError('Fehler beim Laden der Dashboard-Daten!');
      },
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/Login']);
  }
}
