import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataserviceService } from './dataservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Deploying a multi-container application to AKS';

  constructor(
    private dataService: DataserviceService
  ) {

  }

  products: Observable<string[]>;

  getProducts() {
    this.products = this.dataService.getProducts();
  }
}
