import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router: Router) { }

  ngOnInit(): void { }

  onClickBtn(): void {
    console.log(this.buttonTitle)
    switch (this.buttonTitle) {
      case 'Checkout':
        this.router.navigateByUrl('/checkout');
        break
      case 'Place Order':
        localStorage.clear();
        this.router.navigateByUrl('/');
        break
    }
  }
}
