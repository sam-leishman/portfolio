import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  sites = [
    { name: 'LinkedIn', username: 'Sam Leishman', link: 'https://www.linkedin.com/in/sam-leishman-9201471b5/', logo: '../../assets/linkedInLogo.png', hover: '../../assets/linkedInLogoColor.png', src: '' },
    { name: 'Email', username: 'samuelleish@gmail.com', link: 'mailto: samuelleish@gmail.com', logo: '../../assets/emailLogo.png', hover: '../../assets/gmailLogo.png', src: '' },
    { name: 'Instagram', username: '@sam__leishman', link: 'https://www.instagram.com/sam__leishman/', logo: '../../assets/instagramLogo.png', hover: '../../assets/altInstagramLogo.png', src: '' },
    { name: 'GitHub', username: 'sam-leishman', link: 'https://github.com/sam-leishman', logo: '../../assets/gitHubLogo.png', hover: '../../assets/altGitHubLogo.png', src: '' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
