Câu A1 (5đ) — 3 Cách nhúng CSS

    Cách 1(inline):
    ví dụ: <p style="color: red; font-weight: bold;">Hello</p>

    Ưu điểm: nhanh khi test, áp dụng ngay lập tức
    Nhược điểm: khó bảo trì
    Nên dùng khi: để test nhanh

    Cách 2(internal):
    Ví dụ:

    <head>
    <style>
        p {
        color: blue;
        }
    </style>
    </head>
    Ưu điểm: Quản lý style trong 1 file HTML,dễ đọc hơn inline
    Nhược điểm: Không tái sử dụng cho nhiều trang
    Nên dùng khi: trang đơn hay để Demo / bài tập

    Cách 3(External CSS):

    <head>
    <link rel="stylesheet" href="styles.css">
    </head>
    /* styles.css */
    p {
    color: green;
    }
    Ưu điểm:Tách biệt rõ HTML & CSS,Tái sử dụng nhiều trang
    Nhược điểm: Cần thêm request (lần đầu load)
    Nên dùng khi: Website thật / production, dự án lớn

    Thứ tự ưu tiên cao đến thấp
    Inline CSS
    Internal CSS
    External CSS
    vì phần nào chương trình chạy cuối sẽ được đè lên phần trên

Câu A2 (8đ) — CSS Selectors — Dự đoán kết quả

    1. h1                           → Chọn: ShopTLU
    2. .price                       → Chọn: 25.990.000đ,45.990.000đ
    3. #app header                  → Chọn: Chọn toàn bộ <header>
    4. nav a:first-child             → Chọn: Home
    5. .product.featured h2         → Chọn: MacBook Pro
    6. article > p                  → Chọn: tất cả <p>
    7. a[href="/"]                  → Chọn: Home
    8. .top-bar.dark h1              → Chọn: ShopTLU

Câu A3 (7đ) — Box Model — Tính toán kích thước

    Trường hợp 1:
    .box-1 {
    width: 400px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
    }→ Chiều rộng hiển thị = 450px
    → Không gian chiếm trên trang = 470px

    Trường hợp 2:
    .box-2 {
    box-sizing: border-box;
    width: 400px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
    }
    → Chiều rộng hiển thị = 400px
    → Kích thước content thực tế = 350px
    → Không gian chiếm trên trang = 420px
    Trường hợp 3:
    .box-a { margin-bottom: 25px; }
    .box-b { margin-top: 40px; }
    → Khoảng cách giữa box-a và box-b = 40px
    → Giải thích tại sao KHÔNG PHẢI 65px
    vì nó bị collapse nó sẽ lấy box có margin lớn hơn

    Nâng cao: Nếu .box-a có margin-bottom: -10px và .box-b có margin-top: 40px, khoảng cách = bao nhiêu?
    khoảng cách = 30px.

Câu A4 (5đ) — Specificity (Độ ưu tiên)

    1. Tính specificity score (a, b, c) cho mỗi rule

    Rule A: p => Score: (0, 0, 1)
    Rule B: .price => Score: (0, 1, 0)
    Rule C: #main-price => Score: (1, 0, 0)
    Rule D: p.price => Score: (0, 1, 1)

    2. Element sẽ có màu gì? Giải thích

    Element sẽ có mày đỏ
    Vì trình duyệt nó sẽ tính điểm specificity (a=>b=>c) và thằng nào có điểm cao nhất từ phải qua trái thì nó sẽ được chọn

    3. Nếu thêm <p class="price" id="main-price" style="color: orange;">, element có màu gì?

    Element sẽ có màu cam
    Vì inline style có độ ưu tiên cao nhất

    4. Nếu Rule A thêm !important: p { color: black !important; }

    Element sẽ có màu đen

    Vì từ khoá !important sẽ đứng trên tất cả qui tắc so sánh

Bài B2 (20đ) — Box Model Lab

    Phần 1:
    Hộp 1 (content-box): Chiều rộng thực tế = 350px
    (300 content + 20*2 padding + 5*2 border)

    Hộp 2 (border-box): Chiều rộng thực tế = 300px
    (width đã bao gồm padding + border)

    Giải thích:
    - content-box: width chỉ tính content → padding + border cộng thêm bên ngoài
    - border-box: width bao gồm cả content + padding + border → tổng không đổi

Bài B3 (15đ) — Specificity Battle

    1. p → (0,0,1)
    2. .text → (0,1,0)
    3. .highlight → (0,1,0)
    4. p.text → (0,1,1)
    5. p.highlight → (0,1,1)
    6. .text.highlight → (0,2,0)
    7. #demo → (1,0,0)
    8. #demo.text → (1,1,0)
    9. #demo.highlight → (1,1,0)
    10. #demo.text.highlight → (1,2,0)

    Element cuối cùng có màu: **gold**

    Vì nó có specificity cao nhất (1,2,0) nên đè lên toàn bộ

    Thay đổi thứ tự rules có ảnh hưởng không?

    Không thay đổi vì thằng màu **gold** có specificity cao  rồi khi có level = nhau thì thay đổi thứ tự mới có thay đổi
