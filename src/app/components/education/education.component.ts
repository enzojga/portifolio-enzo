import { Component } from '@angular/core';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { education } from 'src/app/protocols';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  color = '#1F52AB';

  icons = {
    javaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain-wordmark.svg',
    css: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    react: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg',
    sql: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    html: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    node: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    typeScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
  }

  educations: education[] = [
    {
      name: 'Alura',
      experience: `Em 2018, tive meu primeiro contato com programação. Na época, eu ainda tinha 16
        anos, e foi uma experiência bem diferente do que eu imaginava. Em vez de me transformar em um 
        hacker da matrix, acabei aprendendo sobre as primeiras operações algorítmicas. Apesar da quebra
        de expectativa, acabei me fascinando por um mundo tão grande. Com todo o entusiasmo do mundo, 
        pedi para o meu pai me dar uma assinatura de 1 ano da Alura como presente de Natal e começar o 
        que seria minha carreira.`,
      tecnologies: [this.icons.java, this.icons.javaScript, this.icons.css, this.icons.html],
      image: 'https://crescera.com/wp-content/uploads/2020/02/Alura.jpg',
    },
    {
      name: 'IBMR',
      experience: `Após terminar o ensino médio em 2020, eu não tinha dúvidas: iria seguir na área de
        programação. No ano seguinte, conquistei uma bolsa integral para uma das faculdades mais 
        modernas do Rio de Janeiro. Porém, no meio do caminho, tive outra desilusão: a grade da faculdade 
        geralmente não estava alinhada com minhas expectativas nem com o mercado. No entanto, o 
        conhecimento teórico que tive com bons profissionais foi uma experiência que valeu a pena.`,
      tecnologies: [this.icons.java, this.icons.sql],
      image: 'https://www.ibmr.br/wp-content/uploads/2022/05/Barra-scaled.jpg',
    },
    {
      name: 'Driven',
      experience: `Ao fim de 2021, tranquei a faculdade. Durante 6 meses, estudei por conta própria,
        porém sentia que precisava de mais. Foi quando optei por participar do processo seletivo da 
        Driven. Após ser aprovado no processo e iniciar as aulas, tive a impressão de que a Driven era 
        como eu queria que fosse a faculdade. Praticamente toda minha experiência prática veio com os 
        projetos que eram passados toda semana. Foram os 9 meses de maior aprendizado da minha vida.`,
      tecnologies: [this.icons.react, this.icons.node, this.icons.typeScript, this.icons.git],
      image: 'https://s3.amazonaws.com/gupy5/production/companies/2355/career/19612/images/2021-07-28_17-25_logo.png',
    },
  ]
}
