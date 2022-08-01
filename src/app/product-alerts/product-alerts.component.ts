import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  constructor() {}

  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();

  ngOnInit(): void {}

  notifMe(value: any): void {
    this.notify.emit(value);
    //window.alert('The product ' + product.name + ' has been notified!');
  }
}
