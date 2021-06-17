import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent implements OnInit {
  hasProcducts: boolean = false;
  checkoutList: any;
  retrivedList: any;
  buttonTitle: string = 'Place Order';
  navLink: string = '/list';
  isPlaceOrderBtnDisabled: boolean = true;
  baclNavTitle: string = 'Back to List';
  checkoutListCount: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.retrivedList = localStorage.getItem('products');
    this.checkoutList = JSON.parse(this.retrivedList)
    this.hasProcducts = this.checkoutList?.length > 0 || false;
    this.isPlaceOrderBtnDisabled = this.checkoutList?.length > 0 || false;
    this.checkoutListCount = this.checkoutList.length;
  }

  removeFromCart(product: any):void {
    this.checkoutList = this.checkoutList.filter((item: any) => item.id !== product.id);
    localStorage.setItem('products', JSON.stringify(this.checkoutList))
    this.hasProcducts = this.checkoutList?.length > 0 || false;
    this.isPlaceOrderBtnDisabled = this.checkoutList?.length > 0 || true;
    this.checkoutListCount = this.checkoutList.length;
  }
}
