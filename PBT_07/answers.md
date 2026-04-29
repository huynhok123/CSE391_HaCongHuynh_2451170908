Câu A1 (5đ) — var / let / const
Đọc chương 03. Không chạy code, dự đoán output cho từng đoạn:

    // Đoạn 1
    console.log(x);
    var x = 5;

        var bị hoisting nhưng chỉ khai báo, chưa gán giá trị

    // Đoạn 2
    console.log(y);
    let y = 10;

        let cũng hoisting nhưng nằm trong Temporal Dead Zone

    // Đoạn 3
    const z = 15;
    z = 20;
    console.log(z);

        const = không được gán lại

    // Đoạn 4
    const arr = [1, 2, 3];
    arr.push(4);
    console.log(arr);

        Vẫn sửa nội dung bên trong được

    // Đoạn 5
    let a = 1;
    {
        let a = 2;
        console.log("Trong block:", a);
    }
    console.log("Ngoài block:", a);

        let có block scope
        2 biến a khác nhau

Câu A2 (5đ) — Data Types & Coercion

    console.log(typeof null); // "object"
    console.log(typeof undefined); // "undefined"
    console.log(typeof NaN); // "number"
    console.log("5" + 3); // "53"
    console.log("5" - 3); // 2
    console.log("5" * "3"); // 15
    console.log(true + true); // 2
    console.log([] + []); // ""
    console.log([] + {}); // "[object Object]"
    console.log({} + []); // [object Object]

     Giải thích tại sao "5" + 3 và "5" - 3 cho kết quả khác nhau.
        Vì kiểu dữ liệu trong js không rõ ràng nên trong case1 thì nó nhận ra là nối chuỗi còn case2 thì chỉ có trường hợp trong toán học nên nó ép string sang number để tính toán

Câu A3 (5đ) — So sánh == vs ===

    console.log(5 == "5");           // true
    console.log(5 === "5");          // false
    console.log(null == undefined);  // true
    console.log(null === undefined); // false
    console.log(NaN == NaN);         // false
    console.log(0 == false);         // true
    console.log(0 === false);        // false
    console.log("" == false);        // true

    Nên dùng === vì logic đúng trong việc so sánh 2 giá trị

Câu A4 (5đ) — Truthy & Falsy

    Các giá trị falsy:
    false
    0, -0
    ""
    null
    undefined
    NaN

    if ("0") console.log("A");   // In
    if ("") console.log("B");    // Không in
    if ([]) console.log("C");    // In
    if ({}) console.log("D");    // In
    if (null) console.log("E");  // Không in
    if (0) console.log("F");     // Không in
    if (-1) console.log("G");    // In
    if (" ") console.log("H");   // In
