import { Component, OnInit } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  showMobileHeader: boolean = false;

  class = ['rotation'];

  faXmark = faXmark;

  mobileHeader(): string {
    if(this.showMobileHeader) {
      return 'mobile-header';
    }
    return '';
  };

  changeShowMobileHeader(): void {
    this.showMobileHeader = !this.showMobileHeader;
    if(this.class[0]){
      this.class.pop();
    } else {
      this.class.push('rotation');
    }
  }

  ngOnInit() {
    console.log('iniciado');
  }
}
