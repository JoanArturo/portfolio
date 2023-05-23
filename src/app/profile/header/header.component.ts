import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public linkText = 'home';
  public showMenuOnMobile = false;

  onClickLink(event: MouseEvent) {
    let target = event.target as HTMLAnchorElement;
    let url = target.getAttribute('href');
    this.linkText = url ? url.split('#')[1] : '';
    this.showMenuOnMobile = false;
  }

  isActive(text: string) {
    return this.linkText == text;
  }
}
