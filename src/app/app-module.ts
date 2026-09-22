import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ServiceProductImageEventComponent } from './service-product-image-event/service-product-image-event.component';
import { ServiceProductImageEventDetailComponent } from './service-product-image-event-detail/service-product-image-event-detail.component';
import { ProductCatalogComponent } from './product-catalog/product-catalog.component';
import { ServiceCustomerHttpHandleError } from './service-customer-http-handle-error/service-customer-http-handle-error';

@NgModule({
  declarations: [
    App,
    ServiceProductImageEventComponent,
    ServiceProductImageEventDetailComponent,
    ProductCatalogComponent,
    ServiceCustomerHttpHandleError,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [App],
})
export class AppModule {}
