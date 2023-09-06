import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private baseUrl = 'https://opentdb.com/api.php?amount=10&type=multiple'

  constructor(
    private http: HttpClient
  ) { }

  getQuestions(): Observable<any>{
    return this.http.get(this.baseUrl);
  }
}
