import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  color = '#1F52AB';
  educations = [
    {
      name: 'Alura',
      experience: '',
      tecnologies: [],
      image: 'https://crescera.com/wp-content/uploads/2020/02/Alura.jpg',
    },
    {
      name: 'IBMR',
      experience: '',
      tecnologies: [],
      image: 'https://www.ibmr.br/wp-content/uploads/2022/05/Barra-scaled.jpg',
    },
    {
      name: 'Driven',
      experience: '',
      tecnologies: [],
      image: 'https://s3.amazonaws.com/gupy5/production/companies/2355/career/19612/images/2021-07-28_17-25_logo.png',
    },
  ]
}
