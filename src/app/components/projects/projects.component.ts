import { Component } from '@angular/core';
import { project } from 'src/app/protocols';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {    
  icons = {
    javaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain-wordmark.svg',
    css: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    react: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg',
    sql: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    html: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    node: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    typeScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    redis: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original-wordmark.svg",
    docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg",
    express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    jest: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
    nginx: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
    gitHub: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg",
  }

  projects: project[] = [
    {
      name: 'FamilyHold',
      description: `Criei o FamilyHold com o intuito de resolver problemas de comunicação
        familiar. Na aplicação, é possível criar avisos, tarefas, trocar mensagens privadas 
        e muito mais. O projeto foi pensado por mim desde a concepção, desde o UI até a 
        modelagem do banco e a arquitetura do projeto. Todo esse processo durou cerca de 20 
        dias.`,
      icons: [this.icons.javaScript, this.icons.css, this.icons.react, this.icons.node, this.icons.typeScript, this.icons.express, this.icons.sql, this.icons.redis, this.icons.docker, this.icons.nginx],
      images: ['https://media.discordapp.net/attachments/1006396268806951023/1081490240281264218/World_Cancer_Day_Fact.jpg?width=700&height=700',
              'https://media.discordapp.net/attachments/1006396268806951023/1081490789575704596/image.png?width=702&height=702',
              'https://media.discordapp.net/attachments/1006396268806951023/1081491001648099418/image.png?width=706&height=702',
              'https://media.discordapp.net/attachments/1006396268806951023/1081491344930914334/image.png?width=699&height=702',
              'https://media.discordapp.net/attachments/1006396268806951023/1081491539303350362/image.png?width=703&height=702',
              'https://media.discordapp.net/attachments/1006396268806951023/1081491780312248370/image.png?width=702&height=702',
              'https://media.discordapp.net/attachments/1006396268806951023/1081492026639527986/image.png?width=702&height=702',
              'https://media.discordapp.net/attachments/1006396268806951023/1081492287609118791/image.png?width=708&height=702',
              'https://media.discordapp.net/attachments/1006396268806951023/1081492551749603338/image.png?width=706&height=702',
              'https://media.discordapp.net/attachments/1006396268806951023/1081492734013091880/image.png?width=703&height=702',
              'https://media.discordapp.net/attachments/1006396268806951023/1081494098894131242/image.png?width=705&height=700'],
      backgroundColor: '#BE264C',
      fontColor: 'white',
      repositorie: 'https://github.com/enzojga/Family-Hold',
    },
    {
      name: 'Driven.t',
      description: `O Driven.t foi o maior projeto em que já trabalhei. O projeto é uma aplicação 
      web de booking em hotéis e atividades. O desenvolvimento foi feito com a colaboração de 4 
      desenvolvedores. Utilizamos o Scrum como metodologia ágil e em 3 sprints concluímos o 
      desenvolvimento.`,
      icons: [this.icons.javaScript, this.icons.css, this.icons.react, this.icons.node, this.icons.typeScript, this.icons.express, this.icons.sql, this.icons.redis, this.icons.jest],
      images: [
        'https://media.discordapp.net/attachments/1006396268806951023/1081531627995406426/image.png?width=702&height=702',
        'https://media.discordapp.net/attachments/1006396268806951023/1081527370739109908/image.png?width=703&height=702',
        'https://media.discordapp.net/attachments/1006396268806951023/1081527371011735674/image.png?width=703&height=702',
        'https://media.discordapp.net/attachments/1006396268806951023/1081527371343077376/image.png?width=703&height=702',
      ],
      backgroundColor: '#FA5994',
      fontColor: 'white',
      repositorie: 'https://github.com/orgs/Real-Driven-t/repositories',
    },
    {
      name: 'TrackIt',
      description: `TrackIt é uma aplicação web com o objetivo de ajudar a criar novos hábitos e 
        manter os antigos, ele também mantém uma sequência de dias em que o hábito foi executado. 
        Para desenvolver o projeto eu recebi um esquema no figma de como o projeto deveria se parecer 
        e uma API para fazer a integração. Foi um grande desafio, pois na época eu ainda sabia muito 
        pouco de React e tive apenas uma semana para desenvolver.`,
      icons: [this.icons.javaScript, this.icons.css, this.icons.react],
      images: [
        'https://media.discordapp.net/attachments/1006396268806951023/1081540596763738262/image.png?width=700&height=702',
        'https://media.discordapp.net/attachments/1006396268806951023/1081540596482723881/image.png?width=702&height=702',
        'https://media.discordapp.net/attachments/1006396268806951023/1081540597053132921/image.png?width=700&height=702',
        'https://media.discordapp.net/attachments/1006396268806951023/1081540597459996772/image.png?width=700&height=702',
        'https://media.discordapp.net/attachments/1006396268806951023/1081540597816508416/image.png?width=702&height=702'
      ],
      backgroundColor: '#E5E5E5',
      fontColor: '#116BA5',
      repositorie: 'https://github.com/enzojga/TrackIt'
    },
    {
      name: 'Mais projetos:',
      description: `Além desses projetos que eu citei, no meu GitHub existem mais repositórios que 
        eu gostaria de apresentar. Não apresentei os melhores necessariamente, mas sim os que mais 
        gostei de trabalhar. Então, caso queira conhecer mais sobre mim, sinta-se livre para visitar 
        meu GitHub ou me chamar no LinkedIn.`,
      icons: [],
      images: [],
      backgroundColor: '#1F52AB',
      fontColor: 'white',
      repositorie: 'https://github.com/enzojga/'
    }

  ]
}
