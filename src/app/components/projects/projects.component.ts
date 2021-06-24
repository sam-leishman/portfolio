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
      class: 'ryparis',
      url: 'https://sam-leishman.github.io/ryParis/'
    },
    {
      name: 'Nick Cage',
      developed: 'HTML/CSS',
      description: 'This was just me messing around with bootstrap. You might regret clicking on it. (no JavaScript).',
      class: 'nickcage',
      url: 'https://sam-leishman.github.io/bootstrapCarousel/'
    },
    {
      name: 'To-Do App',
      developed: 'JavaScript',
      description: 'This basic to-do app was my first big JavaScript project.',
      class: 'todoapp',
      url: 'https://sam-leishman.github.io/toDoApp/'
    },
    {
      name: 'Pokémon',
      developed: 'JavaScript',
      description: 'This was my first project where I worked with an API. I used an API that had all sorts of data on Pokémon and used it to display them by region.',
      class: 'pokemon',
      url: 'https://sam-leishman.github.io/pokemonApp/'
    },
    {
      name: 'Golf Scorecard',
      developed: 'JavaScript',
      description: 'Using an API, I created this golf scorecard app where you can keep score while playing at one of three courses in Utah.',
      class: 'scorecard-js',
      url: 'https://sam-leishman.github.io/golfScoreCardApp/'
    },
    {
      name: 'Spiffy Chat',
      developed: 'React',
      description: 'This was my first collaborative project. Me and my partner built this chat app in React.',
      class: 'chatapp',
      url: 'https://sam-leishman.github.io/chat-app/'
    },
    {
      name: 'HR Timesheet',
      developed: 'Angular',
      description: 'My class at Mtech built this app together using Angular.',
      class: 'timesheet',
      url: 'https://sam-leishman.github.io/hr-timesheet/'
    },
    {
      name: 'Golf Scorecard',
      developed: 'Angular',
      description: 'I made this golf scorecard app using the same API as the one I did in JavaScript. This one, however, was built in Angular using Material design.',
      class: 'scorecard-ng',
      url: 'https://sam-leishman.github.io/angular-golf-scorecard/'
    },
    {
      name: 'Pokémon Matching Game',
      developed: 'Angular',
      description: 'For this group project, me and two others made a matching game using Pokémon cards. We integrated Firebase for authentication and Firestore for our database.',
      class: 'pokemonmatching',
      url: 'https://pokemonmatching.web.app/'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
