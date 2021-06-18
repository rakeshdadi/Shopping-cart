import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent implements OnInit {
  hasProcducts: boolean = false;
  checkoutList: any = [];
  retrivedList: any;
  checkoutListCount: number = 0;
  totalAmount: number = 0;
  buttonTitle: string = 'Place Order';
  navLink: string = '/list';
  bacKNavTitle: string = 'Back to List';
  isPlaceOrderBtnDisabled: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.retrivedList = localStorage.getItem('products');
    this.checkoutList = JSON.parse(this.retrivedList)
    this.hasProcducts = this.checkoutList?.length > 0 || false;
    this.isPlaceOrderBtnDisabled = this.checkoutList?.length > 0 ? false : true;
    this.checkoutListCount = this.checkoutList.length;
    this.totalAmount = this.getTotalAmount(this.checkoutList)
  }

  removeFromCart(product: any): void {
    this.checkoutList = this.checkoutList.filter((item: any) => item.id !== product.id);
    this.totalAmount = this.getTotalAmount(this.checkoutList)
    localStorage.setItem('products', JSON.stringify(this.checkoutList))
    this.hasProcducts = this.checkoutList?.length > 0 || false;
    this.isPlaceOrderBtnDisabled = this.checkoutList?.length > 0 || true;
    this.checkoutListCount = this.checkoutList.length;
  }

  getTotalAmount(list: any): number {
    return list.reduce((acc: any, med: any) => (parseFloat(med.price) ?? 0) + acc, 0)
  }
}
