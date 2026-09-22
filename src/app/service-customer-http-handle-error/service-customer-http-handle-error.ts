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
    // Xóa ngay trạng thái cũ trên UI khi vừa click
    this.errMessage = '';
    this.customerGroups = null;
    
    this._service.getCustomersHandleError().subscribe({
      next: (data) => {
        this.customerGroups = data;
        this.errMessage = '';
      },
      error: (err) => {
        // Trích xuất đúng câu thông báo lỗi
        this.errMessage = err.message ? err.message : err.toString();
        this.customerGroups = null;
      }
    });
  }

  loadWrongData() {
    // Xóa ngay trạng thái cũ trên UI khi vừa click
    this.errMessage = '';
    this.customerGroups = null;
    
    this._service.getCustomersHandleErrorWrongUrl().subscribe({
      next: (data) => {
        this.customerGroups = data;
        this.errMessage = '';
      },
      error: (err) => {
        // Trích xuất đúng câu thông báo lỗi
        this.errMessage = err.message ? err.message : err.toString();
        this.customerGroups = null;
      }
    });
  }
}
