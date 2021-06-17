import { Component, Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() buttonTitle: string = '';
  @Input() navLink: string = ''; 
  @Input() isBtnDisabled: boolean = true;
  @Input() itemsInCart: number = 0;

  constructor(private router: Router) {}

  onClickLogout():void {
    localStorage.clear();
    this.router.navigateByUrl('/');
  }
}
