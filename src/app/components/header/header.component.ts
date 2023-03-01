import { Component } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showMobileHeader: boolean = false;

  angle: number = 45;

  faXmark = faXmark;

  mobileHeader(): string {
    if(this.showMobileHeader) {
      return 'mobile-header';
    }
    return '';
  };

  changeShowMobileHeader(): void {
    this.showMobileHeader = !this.showMobileHeader;
    this.angle = this.angle * 2;
  }
}
