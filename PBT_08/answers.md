Câu A1 (5đ) — Function Declaration vs Expression vs Arrow

    Câu hỏi: 3 cách này có khác nhau về hoisting không? Giải thích bằng ví dụ code cụ thể.
        Có khác về hoisting: Function Declaration có hoisting còn Expression, Arrow cũng có hoisting nhưng bị nằm trong TDZ

Câu A2 (5đ) — Scope & Closure

    // Đoạn 1:
    function counter() {
        let count = 0;
        return {
            increment: () => ++count,
            decrement: () => --count,
            getCount: () => count
        };
    }
    const c = counter();
    console.log(c.increment());  1
    console.log(c.increment());  2
    console.log(c.increment());  3
    console.log(c.decrement());  2
    console.log(c.getCount());   2

    // Đoạn 2:
    for (var i = 0; i < 3; i++) {
        setTimeout(() => console.log("var:", i), 100);
    }
    output:
    var: 3
    var: 3
    var: 3
    for (let j = 0; j < 3; j++) {
        setTimeout(() => console.log("let:", j), 200);
    }
    output:
    let:0
    let:1
    let:2

    Giải thích chi tiết: Tại sao var và let cho kết quả khác nhau trong vòng lặp setTimeout?

    vì mỗi lần vòng lặp hàm settimeout sẽ tham chiếu đến biến
    mà var dùng chung 1 biến cho n lần chạy, hàm settimeout sẽ tham chiếu điến biến đó mỗi vòng lặp kết quả n vòng lặp nó sẽ chỉ tham chiếu đến biến đó thôi và cho i giống nhau

    let mỗi lần vòng lặp nó không đè giá trị lên biến cũ mà tạo hẳn biến mới với mỗi lần lặp vì vậy mỗi vòng lặp hàm settimeout sẽ tham chiếu đến một biến mới hoàn toàn và cho j khác nhau

Câu A3 (5đ) — Array Methods

    1. Lấy các số chẵn → [2, 4, 6, 8, 10]
        let chan = nums.filter(n => n%2 === 0);

    2. Nhân mỗi số với 3                  → [3, 6, 9, ..., 30]
        let nhan3 = nums.map(n => n*3);

    3. Tính tổng tất cả                   → 55
        let tong = nums.reduce((acc, n) => acc + n, 0);

    4. Tìm số đầu tiên > 7               → 8
        let timSoBay = nums.find(n => n > 7);

    5. Kiểm tra CÓ số > 10 không         → false
        let lonHonMuoi = nums.some(n => n > 10);

    6. Kiểm tra TẤT CẢ đều > 0           → true
        let lonHonKhong = nums.every(n => n > 0);

    7. Tạo mảng "Số X là [chẵn/lẻ]"      → ["Số 1 là lẻ", "Số 2 là chẵn", ...]
        let chanle = nums.map(n => `So ${n} la ${n % 2 === 0 ? 'chan' : 'le'}`);


    8. Đảo ngược mảng (không mutate gốc)  → [10, 9, ..., 1]
        let dao = [...nums].reverse();

Câu A4 (5đ) — Object Destructuring & Spread

    const product = {
        name: "iPhone 16",
        price: 25990000,
        specs: { ram: 8, storage: 256, color: "Titan" }
    };

    // Destructuring
    const { name, price, specs: { ram, color } } = product;
    console.log(name, price, ram, color);  // "iPhone 16", 25990000, 8, "Titan"
    console.log(specs);                     // Loi

    // Spread
    const updated = { ...product, price: 23990000, sale: true };
    console.log(updated.price);            // 23990000
    console.log(updated.sale);             // true
    console.log(product.price);            // (gốc có đổi?) không

    // Spread gotcha
    const copy = { ...product };
    copy.specs.ram = 16;
    console.log(product.specs.ram);        // 1 6(16 hay 8? Tại sao?)
    vì chỉ là shallow copy nó cùng trỏ đến 1 địa chỉ obj thôi chứ không phải tạo ra biến mới nên thay đổi giá trị obj thì nó cũng bị thay đổi theo luôn
