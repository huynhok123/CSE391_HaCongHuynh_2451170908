// Function Declaration
function tinhThueBaoHiem(luong) {
  const thue = luong > 11000000 ? luong * 0.1 : 0;
  const thuc_nhan = luong - thue;

  return {
    thue: thue,
    thuc_nhan: thuc_nhan,
  };
}

// Function Expression
const tinhThueBaoHiem2 = function (luong) {
  const thue = luong > 11000000 ? luong * 0.1 : 0;
  const thuc_nhan = luong - thue;

  return {
    thue,
    thuc_nhan,
  };
};
// Arrow Function

const tinhThueBaoHiem3 = (luong) => {
  const thue = luong > 11000000 ? luong * 0.1 : 0;
  const thuc_nhan = luong - thue;

  return {
    thue,
    thuc_nhan,
  };
};
