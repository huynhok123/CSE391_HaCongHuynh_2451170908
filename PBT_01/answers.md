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

Đọc chương 04, trả lời: Tại sao trang web dưới đây bị Google đánh giá SEO thấp? Liệt kê ít nhất 4 à sửa lại.

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

Bài B3 (15đ) — Debug HTML

    Lỗi 1: Dòng 1 — Thẻ <!DOCTYPE> không đầy đủ — Thay bằng <!DOCTYPE html>.

    Lỗi 2: Dòng 2 — Thẻ <title> thiếu thẻ đóng </title> — Thêm </title> sau nội dung tiêu đề.

    Lỗi 3: Dòng 3 — Giá trị utf8 trong meta charset không đúng chuẩn SEO/Browser — Thay bằng UTF-8.

    Lỗi 4: Dòng 4 — Sai thẻ đóng <h1> (đang viết là thẻ mở) — Thay <h1> ở cuối câu thành </h1>.

    Lỗi 5: Dòng 8 — Sai thẻ đóng <a> (đang viết là thẻ mở) — Thay <a> thành </a>.

    Lỗi 6: Dòng 15 — Thuộc tính src thiếu dấu ngoặc kép và thiếu thuộc tính alt (quan trọng cho SEO) — Viết src="iphone.jpg" và thêm alt="mô tả ảnh".

    Lỗi 7: Dòng 17 — Thẻ <b> nằm ngoài thẻ đóng </p> — Đóng thẻ </b> trước khi đóng </p>.

    Lỗi 8: Dòng 21-23 — Dùng thẻ <td> cho tiêu đề bảng và thiếu cấu trúc <thead> — Thay <td> thành <th> và bọc hàng tiêu đề trong thẻ <thead>.

    Lỗi 9: Dòng 32 — Dùng thẻ <main> 2 lần — Thay thẻ <main> thứ hai thành thẻ <aside>.

    Lỗi 10: Dòng 37 — Thẻ <p> trong <footer> thiếu thẻ đóng — Thêm </p> vào cuối dòng.

Bài B4 (15đ) — Phân tích trang web thật

1.  Thẻ <header> trong thẻ <div> có id = main.

    Thẻ <nav> trong thẻ <div> có class = "navbar-wrapper container-wrapper" trong thẻ <header> có class = "shopee-top shopee-top--sticky".

    Thẻ <footer> trong thẻ <div> co id = main.

2.  web không dùng table.

3.  Trang web dùng action và method theo mặc đinh trang web:
    action mặc định là GET.
    action mặc đinh là gủi request đến chính URL hiện tại.

    Thẻ <input> cũng không khai báo thuộc tính nên trình duyệt sẽ tự động cài theo mặc đinh là type="text".

Câu C2 (10đ) — So sánh & Tranh luận
Quan điểm “dùng <div> cho mọi thứ” nghe có vẻ nhanh, nhưng về lâu dài là thiệt hại kỹ thuật rõ ràng.

Thứ nhất là SEO. Công cụ tìm kiếm như Google không chỉ đọc text mà còn phân tích cấu trúc HTML. Khi bạn dùng <header>, <nav>, <main>, <article>, nội dung được phân loại rõ ràng → bot hiểu đâu là nội dung chính, đâu là menu, đâu là bài viết. Nếu tất cả đều là <div>, bạn buộc phải “đoán” bằng class, và bot không phải lúc nào cũng hiểu đúng → ảnh hưởng ranking.

Thứ hai là khả năng truy cập. Các trình đọc màn hình như NVDA dựa vào semantic HTML để giúp người khiếm thị điều hướng nhanh (ví dụ nhảy thẳng tới <main> hoặc danh sách <nav>). Nếu dùng toàn <div>, người dùng phải nghe từng dòng vô nghĩa → trải nghiệm cực tệ.

Ví dụ cụ thể: breadcrumb.

<nav aria-label="breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li>Product</li>
  </ol>
</nav>

Ở đây <nav> + aria-label giúp screen reader hiểu ngay đây là điều hướng, còn <ol> thể hiện thứ tự cấp bậc. Nếu thay bằng <div>, bạn mất toàn bộ ý nghĩa này.

Tuy vậy, <div> không vô dụng. Nó phù hợp khi chỉ cần layout hoặc grouping thuần túy, ví dụ wrapper cho Flex/Grid, hoặc container styling mà không mang ý nghĩa nội dung.
