import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects = [
    {
      name: 'RYParis',
      developed: 'HTML/CSS',
      description: 'A Mock-Up project designed in basic HTML/CSS (no JavaScript).',
      image: 'url',
      url: 'https://sam-leishman.github.io/ryParis/'
    },
    {
      name: 'Nick Cage',
      developed: 'HTML/CSS',
      description: 'I don\'t really have much to say about this one. You might regret clicking on it. (no JavaScript).',
      image: 'url',
      url: 'https://sam-leishman.github.io/bootstrapCarousel/'
    },
    {
      name: 'To-Do App',
      developed: 'JavaScript',
      description: 'This basic to-do app was my first big JavaScript project.',
      image: 'url',
      url: 'https://sam-leishman.github.io/toDoApp/'
    },
    {
      name: 'Pokémon',
      developed: 'JavaScript',
      description: 'This was my first project where I worked with an API. I used an API that had all sorts of data on Pokémon and used it to display them by region.',
      image: 'url',
      url: 'https://sam-leishman.github.io/pokemonApp/'
    },
    {
      name: 'Golf Scorecard',
      developed: 'JavaScript',
      description: 'Using an API, I created this golf scorecard app where you can keep score while playing at one of three courses here in Utah.',
      image: 'url',
      url: 'https://sam-leishman.github.io/golfScoreCardApp/'
    },
    {
      name: 'Spiffy Chat',
      developed: 'React',
      description: 'This was my first collaborative project. Me and my partner built this chat app in React.',
      image: 'url',
      url: 'https://sam-leishman.github.io/chat-app/'
    },
    {
      name: 'HR Timesheet',
      developed: 'Angular',
      description: 'My class at Mtech built this app together using Angular.',
      image: 'url',
      url: 'https://sam-leishman.github.io/hr-timesheet/'
    },
    {
      name: 'Golf Scorecard',
      developed: 'Angular',
      description: 'I made this golf scorecard app using the same API as the one I did in JavaScript. This one, however, was built in Angular using Material design.',
      image: 'url',
      url: 'https://sam-leishman.github.io/angular-golf-scorecard/'
    },
    {
      name: 'Pokémon Matching Game',
      developed: 'Angular',
      description: 'For this group project, we made a matching game using Pokémon cards. We integrated Firebase for authentication and Firestore for our database.',
      image: 'url',
      url: 'https://pokemonmatching.web.app/'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
