import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  icons = {
    github: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    linkedin: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
    angular: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    typeScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    wpp: 'https://img.icons8.com/office/512/whatsapp--v1.png',
    aws: 'https://icongr.am/devicon/amazonwebservices-original.svg?size=148&color=currentColor'
  }
}
