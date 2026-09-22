# BÀI TẬP MÔN WEB KINH DOANH NÂNG CAO

**Họ và tên:** Lý Lê Minh  
**Mã sinh viên:** K24  
**Repository GitHub:** [Web-Kinh-Doanh-Nang-Cao-LyLeMinh](https://github.com/minhllk24/Web-Kinh-Doanh-Nang-Cao-LyLeMinh.git)  

---

## 📌 GIỚI THIỆU DỰ ÁN

Dự án được xây dựng bằng **Angular Framework** để thực hiện các bài tập thực hành trong học phần Web Kinh Doanh Nâng Cao.  
Website bao gồm các bài tập về quản lý danh mục sản phẩm, xử lý dịch vụ (Service), gọi dữ liệu từ JSON và xử lý lỗi HTTP.

---

## 🛠 HƯỚNG DẪN CÀI ĐẶT VÀ CHẠY DỰ ÁN

Thầy/Cô và các bạn có thể thực hiện theo các bước sau để chạy dự án trên máy local:

### 1. Yêu cầu hệ thống
- **Node.js**: Phiên bản 18 trở lên (Khuyên dùng LTS)
- **npm**: Đã được cài đặt kèm Node.js

### 2. Tải và cài đặt
Mở terminal / Command Prompt và thực hiện các lệnh:

```bash
# Clone repository về máy
git clone https://github.com/minhllk24/Web-Kinh-Doanh-Nang-Cao-LyLeMinh.git

# Di chuyển vào thư mục dự án (nếu clone cả repo)
cd Excercise

# Cài đặt các thư viện phụ thuộc (node_modules)
npm install
```

### 3. Chạy ứng dụng
```bash
# Khởi chạy server phát triển
npm start
# hoặc: ng serve
```
Sau khi chạy thành công, mở trình duyệt và truy cập vào đường dẫn:  
👉 **`http://localhost:4200`**

---

## 🚀 HƯỚNG DẪN THAO TÁC VÀ CHẤM BÀI

Dự án đã tích hợp menu điều hướng ở trang chủ hoặc Thầy/Cô có thể truy cập trực tiếp theo các đường dẫn (route) bên dưới:

### 1. Bài 13: Service Product Image Event
* **Đường dẫn (Route):** `http://localhost:4200/service-product-image-event`
* **Mô tả:** Hiển thị danh sách sản phẩm cùng hình ảnh tương ứng.
* **Hướng dẫn chấm:** 
  * Click vào hình ảnh sản phẩm để xem sự kiện phản hồi hiển thị thông tin / ảnh phóng to.
  * Kiểm tra các hình ảnh sản phẩm nước giải khát hiển thị trơn tru, không vỡ nét hay lỗi link.

---

### 2. Bài 14: Product Catalog Management
* **Đường dẫn (Route):** `http://localhost:4200/product-catalog`
* **Mô tả:** Quản lý danh mục sản phẩm đồ uống / nước giải khát.
* **Hướng dẫn chấm:**
  * Thao tác duyệt danh mục sản phẩm.
  * Kiểm tra hiển thị hình ảnh và chi tiết giá sản phẩm.

---

### 3. Bài 18: Json Array Model – Group Customers & HTTP Error Handling (*)
* **Đường dẫn (Route):** `http://localhost:4200/service-customer-http-handle-error`
* **Mô tả:** Đọc dữ liệu Khách hàng phân nhóm từ file JSON (`assets/data/customers.json`) và xử lý ngoại lệ khi gọi HTTP request sai đường dẫn.
* **Hướng dẫn chấm:**
  * **Nút "Load đúng dữ liệu khách hàng":** Click **1 lần**, hệ thống sẽ đọc thành công file JSON và hiển thị danh sách Khách hàng phân theo nhóm (VIP / Normal) đầy đủ Avatar, Id, Name, Email, Age.
  * **Nút "Load sai đường dẫn (Test Error handling)":** Click **1 lần**, hệ thống sẽ gọi đến tệp tin không tồn tại (`customers-wrong.json`), lập tức kích hoạt bộ xử lý lỗi (catchError) và hiển thị thông báo lỗi thân thiện trên giao diện.

---

## 📂 CẤU TRÚC THƯ MỤC CHÍNH

```text
Excercise/
├── src/
│   ├── app/
│   │   ├── service-product-image-event/        # Code Bài 13
│   │   ├── product-catalog/                    # Code Bài 14
│   │   ├── service-customer-http-handle-error/ # Code Bài 18
│   │   └── app.routes.ts                       # Cấu hình đường dẫn (Routing)
│   └── assets/
│       ├── data/
│       │   └── customers.json                  # Dữ liệu JSON bài 18
│       └── avatars/                            # Hình ảnh Avatar khách hàng
└── README.md
```

---

*Cảm ơn Thầy/Cô đã kiểm tra và chấm bài tập của em!*
