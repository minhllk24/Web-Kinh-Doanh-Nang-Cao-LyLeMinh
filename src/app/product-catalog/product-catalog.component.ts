import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../services/catalog.service';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.css'],
  standalone: false
})
export class ProductCatalogComponent implements OnInit {
  catalogs: any;
  constructor(private catalogService: CatalogService) {}

  ngOnInit() {
    this.catalogs = this.catalogService.getCategories();
  }
}
