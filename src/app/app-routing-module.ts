import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceProductImageEventComponent } from './service-product-image-event/service-product-image-event.component';
import { ServiceProductImageEventDetailComponent } from './service-product-image-event-detail/service-product-image-event-detail.component';
import { ProductCatalogComponent } from './product-catalog/product-catalog.component';
import { ServiceCustomerHttpHandleError } from './service-customer-http-handle-error/service-customer-http-handle-error';

const routes: Routes = [
  { path: 'service-product-image-event', component: ServiceProductImageEventComponent },
  { path: 'service-product-image-event/:id', component: ServiceProductImageEventDetailComponent },
  { path: 'product-catalog', component: ProductCatalogComponent },
  { path: 'service-customer-http-handle-error', component: ServiceCustomerHttpHandleError }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
