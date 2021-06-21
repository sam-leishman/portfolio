import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects = [
    { name: 'RYParis', developed: 'HTML/CSS', description: 'A Mock-Up project designed in basic HTML/CSS (no JavaScript).', image: 'url', url: 'https://sam-leishman.github.io/ryParis/' },
    { name: 'Nick Cage', developed: 'HTML/CSS', description: 'I don\'t really have much to say about this one. You might regret clicking on it. (no JavaScript).', image: 'url', url: 'https://sam-leishman.github.io/bootstrapCarousel/' },
    { name: 'To-Do App', developed: 'JavaScript', description: 'blah blah blah', image: 'url', url: 'https://sam-leishman.github.io/toDoApp/' },
    { name: 'Pokémon', developed: 'JavaScript', description: 'This was my first project where I worked with an API. I used an API that had all sorts of data on Pokémon and used it to display them by region.', image: 'url', url: 'https://sam-leishman.github.io/pokemonApp/' },
    { name: 'Golf Scorecard', developed: 'JavaScript', description: 'blah blah blah', image: 'url', url: 'https://sam-leishman.github.io/golfScoreCardApp/' },
    { name: 'Spiffy Chat', developed: 'React', description: 'This was my first collaborative project. We built this chat app in React.', image: 'url', url: 'https://sam-leishman.github.io/chat-app/' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
