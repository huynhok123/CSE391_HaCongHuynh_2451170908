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
