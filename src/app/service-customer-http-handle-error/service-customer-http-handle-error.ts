import { Component, OnInit } from '@angular/core';
import { CustomerHttpService } from '../services/customer-http';

@Component({
  selector: 'app-service-customer-http-handle-error',
  templateUrl: './service-customer-http-handle-error.html',
  styleUrls: ['./service-customer-http-handle-error.css'],
  standalone: false
})
export class ServiceCustomerHttpHandleError implements OnInit {
  customerGroups: any;
  errMessage: string = '';

  constructor(private _service: CustomerHttpService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this._service.getCustomersHandleError().subscribe({
      next: (data) => {
        this.customerGroups = data;
        this.errMessage = '';
      },
      error: (err) => {
        this.errMessage = err;
      }
    });
  }

  // Phương thức để demo lỗi (tải sai URL)
  loadWrongData() {
    this._service.getCustomersHandleErrorWrongUrl().subscribe({
      next: (data) => {
        this.customerGroups = data;
        this.errMessage = '';
      },
      error: (err) => {
        this.errMessage = err;
        this.customerGroups = null; // Xóa dữ liệu cũ nếu lỗi
      }
    });
  }
}
