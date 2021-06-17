import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title = 'app-pagination';
  data: any;
  displayedData: any;
  itemsPerPage: number = 30;
  allPages: number;
  itemsInCart: any = [];
  buttonTitle: string = 'Checkout';
  navLink: string = '/checkout';
  baclNavTitle: string = '';
  isCheckoutBtnDisabled: boolean = true;
  checkoutListCount: number = 0;

  @Output() link:EventEmitter<string> = new EventEmitter();

  constructor(
    private productsList: ProductsService,
    private spinner: NgxSpinnerService
    ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.productsList.getProducts().subscribe((results: any) => {
      this.data = results;
      this.spinner.hide();
      this.onPageChange();
      this.allPages = Math.ceil(this.data.length / this.itemsPerPage);
    })
  }

  onPageChange(page: number = 1): void {
    const startItem = (page - 1) * this.itemsPerPage;
    const endItem = page * this.itemsPerPage;
    this.displayedData = this.data.slice(startItem, endItem);
  }

  addToCart(product: any):void {
    this.itemsInCart = [...this.itemsInCart, product];
    this.isCheckoutBtnDisabled = this.itemsInCart.length > 0 ? false : true;
    localStorage.setItem('products', JSON.stringify(this.itemsInCart))
    this.checkoutListCount = this.itemsInCart.length;
  }
}
