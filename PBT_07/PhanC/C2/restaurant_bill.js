let soLuongMonAn = Number(prompt("Nhap so luong mon an"));

console.log(`
    |        Hoa don nha hang         |
    ----------------------------------
    `);

let tong = 0;

function formatMoney(n) {
  return n.toLocaleString("vi-VN") + "đ";
}

for (let i = 0; i < soLuongMonAn; i++) {
  let monAn = prompt("Nhap mon an " + i);
  let gia = Number(prompt("Nhap gia"));
  let soLuong = Number(prompt("Nhap so luong"));

  let giaMonAn = gia * soLuong;
  tong += giaMonAn;

  console.log(
    `${i + 1}. ${monAn}    x${soLuong}     @${gia}k  =  ${formatMoney(giaMonAn)}`,
  );
}

let giamGia = (tong * 0) / 100;
let vat = (tong * 8) / 100;
let tip = (tong * 5) / 100;
console.log("Tong cong:                " + tong);
console.log("Giam gia (0%):            " + giamGia);
console.log("VAT (8%):                 " + vat);
console.log("Tip (8%):                 " + tip);
console.log(`-------------------------------------------`);
let thanhToan = tong + giamGia + vat + tip;
console.log("Thanh toan:               " + thanhToan);
