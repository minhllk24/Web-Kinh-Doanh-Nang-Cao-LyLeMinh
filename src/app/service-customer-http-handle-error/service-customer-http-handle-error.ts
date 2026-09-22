import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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

  constructor(
    private _service: CustomerHttpService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    // Xóa ngay trạng thái cũ trên UI khi vừa click
    this.errMessage = '';
    this.customerGroups = null;
    this.cdr.detectChanges(); // Ép cập nhật giao diện
    
    this._service.getCustomersHandleError().subscribe({
      next: (data) => {
        this.customerGroups = data;
        this.errMessage = '';
        this.cdr.detectChanges(); // Ép cập nhật giao diện
      },
      error: (err) => {
        // Trích xuất đúng câu thông báo lỗi
        this.errMessage = err.message ? err.message : err.toString();
        this.customerGroups = null;
        this.cdr.detectChanges(); // Ép cập nhật giao diện
      }
    });
  }

  loadWrongData() {
    // Xóa ngay trạng thái cũ trên UI khi vừa click
    this.errMessage = '';
    this.customerGroups = null;
    this.cdr.detectChanges(); // Ép cập nhật giao diện
    
    this._service.getCustomersHandleErrorWrongUrl().subscribe({
      next: (data) => {
        this.customerGroups = data;
        this.errMessage = '';
        this.cdr.detectChanges(); // Ép cập nhật giao diện
      },
      error: (err) => {
        // Trích xuất đúng câu thông báo lỗi
        this.errMessage = err.message ? err.message : err.toString();
        this.customerGroups = null;
        this.cdr.detectChanges(); // Ép cập nhật giao diện
      }
    });
  }
}
