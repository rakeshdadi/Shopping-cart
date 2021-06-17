import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-nav',
  templateUrl: './back-nav.component.html',
  styleUrls: ['./back-nav.component.css']
})
export class BackNavComponent implements OnInit {
  @Input() backNavTitle: string = '';
  @Input() backNavLink: string = '';
  @Input() buttonTitle: string = '';
  @Input() navLink: string = ''; 
  @Input() isBtnDisabled: boolean = true;
  @Input() itemsInCart: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
