const students = [
  { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
  { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
  { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
  { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
  { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
  { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
  { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
  { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" },
];

let countGioi = 0,
  countKha = 0,
  countTB = 0,
  countYeu = 0;

let maxStudent = null;
let minStudent = null;

let sumMath = 0,
  sumPhysics = 0,
  sumCS = 0;

let sumMale = 0,
  countMale = 0;
let sumFemale = 0,
  countFemale = 0;

console.log("| STT | Tên    | TB   | Xếp loại    |");

for (let i = 0; i < students.length; i++) {
  let s = students[i];

  let avg = s.math * 0.4 + s.physics * 0.3 + s.cs * 0.3;

  avg = Math.round(avg * 10) / 10;

  let rank = "";

  if (avg >= 8.0) {
    rank = "Giỏi";
    countGioi++;
  } else if (avg >= 6.5) {
    rank = "Khá";
    countKha++;
  } else if (avg >= 5.0) {
    rank = "Trung bình";
    countTB++;
  } else {
    rank = "Yếu";
    countYeu++;
  }

  console.log(`| ${i + 1}   | ${s.name}   | ${avg}  | ${rank} |`);

  if (maxStudent === null || avg > maxStudent.avg) {
    maxStudent = { name: s.name, avg: avg };
  }

  if (minStudent === null || avg < minStudent.avg) {
    minStudent = { name: s.name, avg: avg };
  }

  sumMath += s.math;
  sumPhysics += s.physics;
  sumCS += s.cs;

  if (s.gender === "M") {
    sumMale += avg;
    countMale++;
  } else {
    sumFemale += avg;
    countFemale++;
  }
}

console.log("\nSố lượng:");
console.log("Giỏi:", countGioi);
console.log("Khá:", countKha);
console.log("Trung bình:", countTB);
console.log("Yếu:", countYeu);

console.log("\nCao nhất:", maxStudent);
console.log("Thấp nhất:", minStudent);

let n = students.length;
console.log("\nTB môn:");
console.log("Math:", (sumMath / n).toFixed(2));
console.log("Physics:", (sumPhysics / n).toFixed(2));
console.log("CS:", (sumCS / n).toFixed(2));

console.log("\nTB theo giới tính:");
console.log("Nam:", (sumMale / countMale).toFixed(2));
console.log("Nữ:", (sumFemale / countFemale).toFixed(2));
