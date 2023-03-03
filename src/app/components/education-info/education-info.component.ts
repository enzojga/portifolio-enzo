import { Component, Input } from '@angular/core';
import { education, education as educationType } from 'src/app/protocols';

@Component({
  selector: 'app-education-info',
  templateUrl: './education-info.component.html',
  styleUrls: ['./education-info.component.css']
})
export class EducationInfoComponent {
  @Input() education: education = {
    name: '',
    experience: '',
    tecnologies: [],
    image: '',
  }

  ngOnInit() {
    console.log(this.education)
  }

}
