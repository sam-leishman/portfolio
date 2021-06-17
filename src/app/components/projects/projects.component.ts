import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  javascriptProjects = [
    { name: 'To-Do App', description: 'blah blah blah', image: 'url', url: 'https://sam-leishman.github.io/toDoApp/' },
    { name: 'Pokémon', description: 'This was my first project where I worked with an API. I used an API that had all sorts of data on Pokémon', image: 'url', url: 'https://sam-leishman.github.io/pokemonApp/' },
    { name: 'Golf Scorecard', description: 'blah blah blah', image: 'url', url: 'https://sam-leishman.github.io/golfScoreCardApp/' }
  ];
  backendProjects = [
    { name: 'blah', description: 'blah blah blah', image: 'url', url: 'url' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  goToLink(url: string) {
    window.open(url, "_blank");
    // use <a (click)="goToLink("www.example.com")">page link</a> in html
  }

}
