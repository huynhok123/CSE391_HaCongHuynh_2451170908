Câu A1 (5đ) — Input Types

    1. type="email" → Ô nhập text dạng email → Tự kiểm tra có ký tự @ và format email hợp lệ → Dùng cho đăng ký tài khoản, nhận hóa đơn
    2. type="password" → Ô nhập bị ẩn ký tự (hiển thị dấu •••) → Không có validation mặc định (có thể kết hợp minlength) → Dùng cho đăng nhập / tạo tài khoản
    3. type="number" → Ô nhập số có nút tăng/giảm → Chỉ cho nhập số, có thể giới hạn bằng min, max → Dùng nhập số lượng sản phẩm
    4. type="tel" → Ô nhập số điện thoại → Không validate chặt (chỉ gợi ý bàn phím số trên mobile) → Dùng nhập số điện thoại giao hàng
    5. type="date" → Bộ chọn ngày (calendar picker) → Tự đảm bảo format ngày hợp lệ → Dùng chọn ngày giao hàng
    6. type="radio" → Nút chọn 1 trong nhiều lựa chọn → Đảm bảo chỉ chọn 1 option trong cùng name → Dùng chọn phương thức thanh toán
    7. type="checkbox" → Ô tick nhiều lựa chọn → Không validation mặc định (có thể dùng required) → Dùng chọn thêm dịch vụ (gói quà, bảo hành)
    8. type="file" → Nút upload file → Có thể giới hạn loại file bằng accept → Dùng upload ảnh đánh giá sản phẩm
    9. type="search" → Ô tìm kiếm (giống text nhưng có nút clear nhanh) → Không validation đặc biệt → Dùng thanh tìm kiếm sản phẩm
    10. type="url" → Ô nhập link → Tự kiểm tra format URL hợp lệ (http/https) → Dùng nhập website (seller, affiliate, profile shop)

Câu A2 (5đ) — Validation Attributes
Đọc chương 07. Không chạy code, hãy dự đoán điều gì xảy ra khi user bấm Submit cho mỗi trường hợp sau. Giải thích TẠI SAO

<!-- Trường hợp 1 -->

<input type="text" required value=""> <!-- User để trống -->

    Không submit được.Vì thuộc tính required bắt buộc phải có giá trị. Ô đang rỗng ("")  vi phạm và browser chặn submit và hiện thông báo.

<!-- Trường hợp 2 -->

<input type="email" value="abc"> <!-- User gõ "abc" -->

    Không submit được.Vì type="email" yêu cầu đúng format email (phải có @, domain, …).

<!-- Trường hợp 3 -->

<input type="number" min="1" max="10" value="15"> <!-- User gõ 15 -->

    Không submit được. Vì giá trị 15 > max=10 vi phạm range nên browser không cho submit.

<!-- Trường hợp 4 -->

<input type="text" pattern="[0-9]{10}" value="abc123"> <!-- User gõ "abc123" -->

    Không submit được. Vì pattern="[0-9]{10}" yêu cầu đúng 10 chữ số liên tiếp.

<!-- Trường hợp 5 -->

<input type="password" minlength="8" value="123"> <!-- User gõ "123" -->

    Không submit được. Vì minlength=8 yêu cầu ≥ 8 ký tự, "123" chỉ có 3 ký tự nên chặn submit.

Câu A3 (5đ) — Accessibility

1.  Tại sao <label for="email"> quan trọng cho người dùng screen reader?

    Vì liên kết rõ ràng giúp biết label thuộc về input nào và tăng ux khi bấm vào label cũng tự focus vào input luôn

2.  Khi nào dùng <fieldset> + <legend>? Cho ví dụ cụ thể.

    Khi có nhóm input liên quan logic với nhau
    ví dụ
    <fieldset>
        <legend>Thông tin giao hàng</legend>

        <label for="name">Họ tên</label>
        <input id="name" type="text">

        <label for="phone">SĐT</label>
        <input id="phone" type="tel">

    </fieldset>

3.  aria-label dùng khi nào? Tại sao KHÔNG nên dùng aria-label khi đã có <label>?

    aria-label chỉ dùng khi không có text hiển thị.
    Khi đã có <label> thì sẽ bị trùng thông tin gây rối cho screen reader nó có thể bị đọc 2 lần

Câu A4 (5đ) — Media

1. Giải thích thuộc tính loading="lazy" trên thẻ <img>. Nó cải thiện gì? Khi nào KHÔNG nên dùng?

   Nó trì hoãn tải ảnh cho đến khi ảnh gần xuất hiện trong viewport.
   Khi KHÔNG nên dùng:
   +Logo hoặc ảnh chính sản phẩm
   +Ảnh thấy ngay khi mở trang, ví dụ banner, hero

2. Tại sao nên cung cấp nhiều <source> trong thẻ <video>? Liệt kê ít nhất 3 format video web phổ biến.

   Vì:
   +Trình duyệt hỗ trợ bộ mã hoá cho video khác nhau
   +Browser sẽ chọn format đầu tiên nó hỗ trợ
   +Tăng tính thích hợp cho đa nền tảng
   3 format video web phổ biến là: MP4, WebM, Ogg

3. Thuộc tính alt trên <img> dùng để làm gì? Viết alt tốt cho 3 trường hợp:
   Ảnh sản phẩm iPhone 16
   Ảnh trang trí (decorative)
   Ảnh biểu đồ doanh thu Q1/2026

   Thuộc tính alt có tác dụng:
   +Screen reader đọc nội dung ảnh
   +Giúp google hiểu nội dung ảnh tăng điểm SEO
   +Hiển thị khi ảnh lỗi

   Ảnh sản phẩm iPhone 16
   alt="iPhone 16 màu đen, màn hình 6.1 inch, thiết kế viền mỏng"
   Ảnh trang trí (decorative)
   alt=""
   <!-- Để rỗng để screen reader bỏ qua (không gây nhiễu) -->

   Ảnh biểu đồ doanh thu Q1/2026
   alt="Biểu đồ doanh thu quý 1 năm 2026, tăng mạnh từ tháng 1 đến tháng 3"

Câu A5 (5đ) — So sánh <figure> vs <img>

    Dùng cách 1 khi:
    +Ảnh đứng một mình, không cần chú thích hiển thị
    +Thông tin đã đủ trong alt hoặc context xung quanh
    Ví dụ:
    1
    <img src="iphone.jpg" alt="iPhone 16 Pro Max màu titan">
    2
    <img src="logo.png" alt="Apple">

    Dùng cách 2 khi:
    +Ảnh cần giải thích thêm / có caption hiển thị
    +Caption là một phần nội dung quan trọng
    Ví dụ:
    1

    <figure>
    <img src="iphone.jpg" alt="iPhone 16 Pro Max 256GB Titan">
    <figcaption>iPhone 16 Pro Max — 25.990.000đ</figcaption>
    </figure>
    2
    <figure>
    <img src="chart.png" alt="Biểu đồ doanh thu Q1 2026">
    <figcaption>Doanh thu tăng 30% so với quý trước</figcaption>
    </figure>

Câu C1 (10đ) — Debug Form

    Lỗi 1: Dòng 2 — Input "Tên" không có <label for="..."> → vi phạm accessibility
    Sửa: <label for="name">Tên:</label>
    <input type="text" id="name" name="name" required>

    Lỗi 2: Dòng 4 — Input email không có <label>
    Sửa: <label for="email">Email:</label>
    <input type="email" id="email" name="email" required placeholder="Email của bạn">

    Lỗi 3: Dòng 6–7 — Password không có label + không có validation
    Sửa: <label for="password">Mật khẩu:</label>
    <input type="password" id="password" name="password" required minlength="8">

    <label for="confirm">Nhập lại mật khẩu:</label>
    <input type="password" id="confirm" name="confirm" required minlength="8">

    Lỗi 4: Dòng 9 — Phone dùng type="text" thay vì type="tel"
    Sửa: <label for="phone">Số điện thoại:</label>
    <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" placeholder="0901234567">

    Lỗi 5: Dòng 9 — Dùng value mặc định → không nên (best practice UX)
    Sửa: dùng placeholder thay vì value

    Lỗi 6: Dòng 11 — <select> không có <label>
    Sửa: <label for="city">Thành phố:</label>
    <select id="city" name="city" required>

    Lỗi 7: Dòng 15 — Checkbox không có <input> bên trong label
    Sửa: <label>
    <input type="checkbox" name="agree" required>
    Tôi đồng ý điều khoản
    </label>

    Lỗi 8: Dòng 18 — Dùng <input type="submit"> thay vì <button> (best practice)
    Sửa: <button type="submit">Gửi</button>

Câu C2 (10đ) — Thiết kế chiến lược Validation

1. Viết pattern regex cho CMND/CCCD và Số tài khoản
   CMND/CCCD
   pattern="[0-9]{12}"
   Số tài khoản (10–15 chữ số)
   pattern="[0-9]{10,15}"

2. Giải thích: HTML5 validation đủ an toàn cho ứng dụng ngân hàng chưa? Tại sao?
   Validation KHÔNG đủ an toàn.
   Vì validation chỉ chạy ở frontend (trình duyệt)
   Nên người dùng có thể: Tắt validation (novalidate) > Sửa HTML bằng DevTools > Gửi request trực tiếp qua API (Postman, curl) => không đáng tin

3. Liệt kê 3 loại validation mà HTML5 KHÔNG THỂ làm được (phải dùng JavaScript)
   3 loại đó là:
   +mã PIN
   +kiểm tra email đã tồn tại trong hệ thống hay chưa
   +kiểm tra mã OTP có đúng không theo thời gian thực

4. Nêu 2 rủi ro bảo mật nếu chỉ validate trên Frontend mà không validate Backend
   1. Hacker có thể gửi request trực tiếp = lệnh
      curl -X POST /api/register ...
   2. Injection attack
      Nếu backend không validate thì dữ liệu có thể bị lộ và bị chiếm quyền tài khoản
