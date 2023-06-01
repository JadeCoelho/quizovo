import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Quiz } from '../quiz';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.css'],
})
export class QuizFormComponent {
  form1!: FormGroup;
  form2!: FormGroup;
  quizName!: string;
  numQuestions: number = 0;
  continue: boolean = false;
  questions: string[] = [];
  numQuestion: number = 1;
  isFinished: boolean = false;
  quiz!: Quiz;

  constructor(
    private formBuilder: FormBuilder,
    private quizService: QuizService
  ) {
    this.form1 = this.formBuilder.group({
      quizName: [null, [Validators.required]],
      numQuestions: [null, [Validators.required]],
    });
    this.form2 = this.formBuilder.group({
      question: [null, [Validators.required]],
      res1: [null, [Validators.required]],
      res2: [null, [Validators.required]],
      res3: null,
      res4: null,
    });
  }

  onSubmitForm1(form1: any): void {
    console.log(form1.value);
    this.quizName = form1.value.quizName;
    this.numQuestions = form1.value.numQuestions;
    this.continue = true;
  }
  onSubmitForm2(form2: any): void {
    this.questions.push(form2.value);
    form2.reset();
    if (this.numQuestion < this.numQuestions) {
      this.numQuestion++;
    }
    if (this.questions.length >= this.numQuestions) {
      this.isFinished = true;
      this.form2.disable();
    }
  }
  finish(): void {
    this.quiz = {
      name: this.quizName,
      numQuestions: this.questions.length,
      questions: this.questions,
    };
    this.quizService.createQuiz(this.quiz).subscribe({
      next: () => console.log('quiz criado com sucesso'),
      error: () => console.log('erro ao criar quiz'),
      complete: () => console.log('quiz criado'),
    });
    console.log(this.quiz);
  }
}
