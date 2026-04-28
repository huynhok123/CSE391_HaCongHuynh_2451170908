Câu A1 (10đ) — 5 Loại Positioning

    Position | Vẫn chiếm chỗ trong flow?| Tham chiếu vị trí             | Cuộn theo trang?
    static   |Có                        | Không có                      | Có
    relative |Có                        | Vị trí ban đầu của chính nó   | Có
    absolute |Không                     | Parent gần nhất có position   | Có
    fixed    |Không                     | Màn hình                      | Không
    sticky   |Có                        | Màn hình                      | Nó dích vào trang

Khi nào absolute tham chiếu body? Khi nào tham chiếu parent? Giải thích khái niệm "nearest positioned ancestor".

    1. khi những thằng cha của absolute không có relative
    2. khi cha của absolute có relative
    3. Khi con có absolute nó sẽ lấy body để tham chiếu khi những người cha của nó không có relative khi có nó sẽ lấy thằng cha gần nhất có relative để tham chiếu

Câu A2 (10đ) — Flexbox vs Grid

    /* Trường hợp 1 */
    .container { display: flex; }
    .item { flex: 1; }

    item1 item2 item3 item4

    /* Trường hợp 2 */
    .container { display: flex; flex-wrap: wrap; }
    .item { width: 45%; margin: 2.5%; }

    | item1 | item2 |
    | item3 | item4 |
    | item5 | item6 |

    /* Trường hợp 3 */
    .container { display: flex; justify-content: space-between; align-items: center; }
    /* 3 items → Bố cục = ??? */

    |                               |
    |item1        item2        item3|
    |                               |

    /* Trường hợp 4 */
    .container { display: grid; grid-template-columns: 200px 1fr 200px; gap: 20px; }
    /* 3 items → Bố cục = ??? */

    | 200px     |   1fr       | 200px     |
    |   item1   |    item2    |   item3   |

    /* Trường hợp 5 */
    .container { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
    /* 7 items → Bố cục = ??? (mấy hàng? item cuối ở đâu?) */

    | item1 | item2 | item3 |
    | item4 | item5 | item6 |
    | item7 |       |       |

Câu C1 (10đ) — Flexbox vs Grid: Khi nào dùng gì?

    1. Navigation bar ngang (logo + menu + buttons)
    Dùng: Flexbox
    Vì: 1 chiều dễ dùng và căn chỉnh chỉ cần căn trái giữa phải

    2. Lưới ảnh Instagram (3 cột đều, số ảnh không biết trước)
    Dùng: Grid
    Vì: nhiều chiều và tự xuống dòng khi thêm ảnh

    3. Layout blog (main content + sidebar)
    Dùng: Grid
    Vì: Chia layout tổng thể thành 2 cột

    4. Footer với 4 cột thông tin
    Dùng: Grid
    Vì: Nhiều cột song song,Cần đều nhau và rõ ràng

    5. Card sản phẩm (ảnh – text – nút dính đáy)
    Dùng: Flexbox
    Vì: 1 chiều,Cần đẩy nút xuống đáy

Câu C2 (10đ) — Debug Flexbox

    Lỗi 1: Cards không đều chiều cao — nút "Mua" bị nhảy lên/xuống
        Nút mua chưa được đẩy xuống đáy nên nó sẽ sát nội dung ở trên,và các khối không được cài đặt kích thước nên nó sẽ dãn theo nội dung

    Lỗi 2: Muốn items nằm giữa cả ngang lẫn dọc trong container 100vh, nhưng item vẫn dính góc trái trên
        Thiếu code căn chỉnh ngang dọc


    Lỗi 3: Sidebar bị co lại khi content quá dài
        Mặc đinh thuộc tính shrink là 1 thế thì nó sẽ bị co
