import { Component } from '@angular/core';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  faAnglesDown = faAnglesDown;
  toEducation() {
    document.getElementById('education')?.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
}
