Câu A1 (5đ) — HTTP & Browser

1. Khi bạn gõ https://shopee.vn vào trình duyệt và nhấn Enter, hãy liệt kê đúng thứ tự ít nhất 5 bước xảy ra (từ DNS lookup đến render).
   Bài làm:
   Bước 1: Trình duyệt tìm địa chỉ IP tên miền của shopee.vn.
   Bước 2: Trình duyệt gửi yêu cầu Get đến Server Shopee qua giao thức HTTPS.
   Bước 3: Server tìm file trả về cho trình duyệt một HTTPS (mã 200 OK) kèm nội dung file.
   Bước 4: Trình duyệt đọc file HTML để xây DOM Tree và file CSS để xây CSSOM Tree.
   Bước 5: Trình duyệt tính toán và vẽ lên màn hình.
   Nguồn tham chiếu: 01_introduction_html_universe.md (Mục 0,2,3).

2. Trong DevTools của Chrome, tab Network cho thấy thông tin gì? Hãy mở một trang web bất kỳ, chụp screenshot tab Network và đánh dấu (vẽ mũi tên/khoanh tròn) vào:
   Status Code của request đầu tiên
   Tổng thời gian load trang
   Một request trả về file CSS
   Nguồn tham chiếu: 01_introduction_html_universe.md (Mục 6).

Câu A2 (5đ) — Semantic HTML

Đọc chương 04, trả lời: Tại sao trang web dưới đây bị Google đánh giá SEO thấp? Liệt kê ít nhất 4 lỗi semantic và sửa lại.

    Tại vì khi công cụ tìm kiếm quét qua web này sẽ không hiểu đâu là đầu trang, tranh chính và chân trang vì dùng toàn thẻ không có ngữ nghĩa nên vì thế sẽ bị đánh giá SEO thấp và tụt hạng tìm kiếm.

    Lỗi 1: Thay <div class="header"> cho <header>
    Lỗi 2: Thay <div class="menu"> cho <nav>
    Lỗi 3: Thay <div class="main"> cho <main>
    Lỗi 4: Thay <div class="footer">> cho <footer>

    <header>
        <div class="logo">ShopTLU</div>
        <nav>
            <div><a href="/">Trang chủ</a></div>
            <div><a href="/products">Sản phẩm</a></div>
        </nav>
    </header>
    <main>
        <div class="product">
            <div class="title">iPhone 16 Pro</div>
            <div class="price">25.990.000đ</div>
            <div class="image"><img src="iphone.jpg"></div>
        </div>
    </main>
    <footer>© 2026 ShopTLU</footer>

    Nguồn tham chiếu: PHẦN HIỂN THỊ — Visible Part of HTML (Mục 2,3,4).

Câu A3 (5đ) — Block vs Inline
Hộp 1
Text A Text B
Hộp 2
Text C Text D
Hộp 3

    vì thẻ div sẽ chiếm trọn 1 dòng còn thẻ strong và span nó chỉ chiếm đủ font chữ của nó thôi.

Câu A4 (5đ) — Table
Đọc chương 05. Giải thích sự khác nhau giữa <thead>, <tbody>, <tfoot>. Tại sao KHÔNG NÊN dùng table để tạo layout trang web? (Ghi rõ ít nhất 3 lý do)

    <thead>: dùng để định nghĩa tiên để cột trong bảng
    <tbody>: dùng để định nghĩa đay là nơi chứa nội dung chi tiết của tiên đề
    <tfoot>: chứa nội dung được đặt ở cuối bảng để tổng kết hay chú thích...

    Lý do không nên dùng table để tạo layout cho trang web:
    1. Khó tương thích với thiết bị di động.
    2. Khó code bảo trì kém vì nó liên quan đến tổng thể cả trang web.
    3. Phá vỡ ngữ nghĩa làm tụt điểm SEO.
