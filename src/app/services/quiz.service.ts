import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private baseUrl = 'https://opentdb.com/api.php';
  private questions: any[] = [];
  private currentIndex = 0;

  constructor(
    private http: HttpClient
  ) { }

  getQuestions(category: number, difficulty: string): Observable<any>{
    const params = {
      amount: '10',
      type: 'multiple',
      category: category,
      difficulty: difficulty
    }

    return this.http.get(this.baseUrl, { params }).pipe(
      tap((data: any) => {
        this.questions = data.results
      })
    );
  }

  getNextQuestion(): any{
    if(this.currentIndex < this.questions.length){
      if(this.currentIndex >= 9){
        this.currentIndex = 0
      }
      const nextQuestion = this.questions[this.currentIndex];
      this.currentIndex++
      return nextQuestion;
    }
    return null;
  }
}
