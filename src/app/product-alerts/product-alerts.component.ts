import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  constructor() {}

  @Input() product: Product | undefined;

  ngOnInit(): void {}

  notifMe(id: any): void {
    console.log('The product has been notified!' + id);
  }
}
