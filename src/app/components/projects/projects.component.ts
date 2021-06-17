import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  javascriptProjects = [
    { name: 'To-Do App', description: 'blah blah blah', image: 'url', url: 'https://sam-leishman.github.io/toDoApp/' },
    { name: 'Pokémon', description: 'This was my first project where I worked with an API. I used an API that had all sorts of data on Pokémon and used it to display them by region.', image: 'url', url: 'https://sam-leishman.github.io/pokemonApp/' },
    { name: 'Golf Scorecard', description: 'blah blah blah', image: 'url', url: 'https://sam-leishman.github.io/golfScoreCardApp/' }
  ];
  backendProjects = [
    { name: 'blah', description: 'blah blah blah', image: 'url', url: 'url' }
  ];
  otherProjects = [
    { name: 'RYParis', description: 'A Mock-Up project designed in basic HTML/CSS (no JavaScript).', image: 'url', url: 'https://sam-leishman.github.io/ryParis/' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
