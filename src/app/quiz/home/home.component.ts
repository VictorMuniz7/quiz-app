import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private router: Router
  ){

  }

  selectedCategory: string = ''
  selectedDifficulty: string = ''



  categoryMap: { [key: string]: string } = {
    'general': 'General Knowledge',
    'nature': 'Science & Nature',
    'mythology': 'Mythology',
    'sports': 'Sports',
    'geography': 'Geography',
    'history': 'History',
    'animals': 'Animals',
    'anime': 'Anime & Manga'
  };

  categoryNumberMap: { [key: string]: number } = {
    'general': 9,
    'nature': 17,
    'mythology': 20,
    'sports': 21,
    'geography': 22,
    'history': 23,
    'animals': 27,
    'anime': 31
  };

  difficultyMap: { [key: string]: string } = {
    'easy': 'Easy',
    'medium': 'Medium',
    'hard': 'Hard',
  };


  difficultyColorMap: { [key: string]: string } = {
    'easy': '#35EB7D',
    'medium': '#F9D74E',
    'hard': '#E04836',
  };

  startQuiz(){
    const params: NavigationExtras = {
      queryParams: {
        category: this.categoryNumberMap[this.selectedCategory],
        difficulty: this.selectedDifficulty
      }
    }
    this.router.navigate(['quiz'], params);
  }

}
