import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit{

  currentQuestion: any;
  categoryClass: string = '';
  progressValue: number = 0;
  timerInterval: any;
  secondsRemaining: number = 15;
  timeEnds: boolean = false;
  answers: string[] = [];
  rightAnswer: string = '';
  points: number = 0;
  answerClicked: boolean = false;
  showResults = false

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private router: Router
  ){}

  ngOnInit(): void {
   this.play();
  }

  showNextQuestion(){
    if(this.progressValue == 10){
      this.showResults = true
      return
    }
    this.answers = []
    this.currentQuestion = this.quizService.getNextQuestion();
    this.rightAnswer = this.currentQuestion.correct_answer;
    this.answers.push(this.currentQuestion.correct_answer);
    for(let ans of this.currentQuestion.incorrect_answers){
      this.answers.push(ans);
    }
    this.shuffleArray(this.answers)
    this.startTimer();
    this.setCategoryClass();
    this.progressValue++
  }

  startTimer(): void {
    this.answerClicked = false
    this.timeEnds = false;
    this.timerInterval = setInterval(() => {
      if (this.secondsRemaining > 0) {
        this.secondsRemaining--;
      } else {
        this.stopTimer();
      }
    }, 1000);
  }

  stopTimer(): void {
    clearInterval(this.timerInterval);
    this.answerClicked = true
    this.secondsRemaining = 15;
    this.timeEnds = true;
  }

  shuffleArray(array: any[]){
    for (let i = array.length - 1;i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  verifyAnswer(answer: string, element: HTMLElement){
    this.stopTimer();
    this.answerClicked = true

    if(answer === this.rightAnswer){
      element.style.backgroundColor = '#62F55D'
      this.points++
    }else{
      element.style.backgroundColor = '#FC4F3A'
    }
  }

  play(){
    this.showResults = false;
    this.progressValue = 0;
    this.points = 0
    this.answers = []
    this.rightAnswer = ''
    this.route.queryParams.subscribe(params => {
      const category = params['category'];
      const difficulty = params['difficulty'];

      this.quizService.getQuestions(category, difficulty).subscribe(data => {
        this.showNextQuestion();
      })
    })
  }

  exit(){
    if(confirm('You really want to quit?') === true){
      this.router.navigate(['']);
    }
  }


  private setCategoryClass(): void{
    if(this.currentQuestion){
      switch(this.currentQuestion.category){
        case 'General Knowledge':
          this.categoryClass = 'general-bg';
          break;
        case 'Science & Nature':
          this.categoryClass = 'nature-bg';
          break;
        case 'Mythology':
          this.categoryClass = 'mythology-bg';
          break;
        case 'Sports':
          this.categoryClass = 'sports-bg';
          break;
        case 'Geography':
          this.categoryClass = 'geography-bg';
          break;
        case 'History':
          this.categoryClass = 'history-bg';
          break;
        case 'Animals':
          this.categoryClass = 'animals-bg';
          break;
        case 'Entertainment: Japanese Anime & Manga':
          this.categoryClass = 'anime-bg';
          break;
        default:
          this.categoryClass = ''
          break;
      }
    } else {
      this.categoryClass = ''
    }
  }
}
