import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertComponent } from './components/alert/alert.component';
import { BtnHomeComponent } from './components/btn-home/btn-home.component';
import { HomeComponent } from './home/home.component';
import { QuizDeleteComponent } from './quiz/quiz-delete/quiz-delete.component';
import { QuizFormComponent } from './quiz/quiz-form/quiz-form.component';
import { QuizInfoComponent } from './quiz/quiz-info/quiz-info.component';
import { QuizListComponent } from './quiz/quiz-list/quiz-list.component';
import { QuizScreenComponent } from './quiz/quiz-screen/quiz-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuizInfoComponent,
    BtnHomeComponent,
    QuizListComponent,
    QuizFormComponent,
    AlertComponent,
    QuizDeleteComponent,
    QuizScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
