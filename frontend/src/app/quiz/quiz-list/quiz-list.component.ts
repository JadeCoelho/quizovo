import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { QuizService } from '../../services/quiz.service';
import { Quiz } from './../quiz';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css'],
})
export class QuizListComponent implements OnInit {
  quizzes!: Quiz[];
  filter!: Quiz[];
  constructor(private quizService: QuizService, private router: Router) {}
  ngOnInit(): void {
    this.quizService.readQuizzes().subscribe((quizzes) => {
      this.quizzes = quizzes;
      this.filter = quizzes;
    });
  }
  openQuizForm() {
    this.router.navigate(['form']);
  }
  startQuiz(id: any) {
    this.router.navigate(['quiz', id]);
  }
  onEdit(id: any) {
    this.router.navigate(['edit', id]);
  }
  onDelete(id: any) {
    this.router.navigate(['delete', id]);
  }
  search(e: Event) {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    this.quizzes = this.filter.filter((quiz) => {
      return quiz.name?.toLowerCase().includes(value);
    });
  }
}
