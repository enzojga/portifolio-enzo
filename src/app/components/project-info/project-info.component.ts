import { Component, Input } from '@angular/core';
import { project } from 'src/app/protocols';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent {
  @Input() project: project = {
    name: '',
    description: '',
    icons: [],
    images: [],
    backgroundColor: '',
    fontColor: '',
  };
}
