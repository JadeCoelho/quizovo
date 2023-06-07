import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { QuizDeleteComponent } from './quiz/quiz-delete/quiz-delete.component';
import { QuizFormComponent } from './quiz/quiz-form/quiz-form.component';
import { QuizInfoComponent } from './quiz/quiz-info/quiz-info.component';
import { QuizListComponent } from './quiz/quiz-list/quiz-list.component';
import { QuizScreenComponent } from './quiz/quiz-screen/quiz-screen.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'info', component: QuizInfoComponent },
  { path: 'list', component: QuizListComponent },
  { path: 'form', component: QuizFormComponent },
  { path: 'edit/:id', component: QuizFormComponent },
  { path: 'delete/:id', component: QuizDeleteComponent },
  { path: 'quiz/:id', component: QuizScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
