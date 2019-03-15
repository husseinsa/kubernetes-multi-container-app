import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataserviceService } from '../dataservice.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Deploying a multi-container application to Azure Kubernetes';
  public async: any;
  messageSignalR: string;
  messageSignalRFunc: string;
  messages: string[] = [];
  Products: Observable<string[]>;
  errors: string[] = [];

  constructor(private dataService: DataserviceService) {
  }

  ngOnInit() {
  }

  getProducts() {
    this.Products = this.dataService.getProducts();
  }


}
