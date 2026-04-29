let target = Math.floor(Math.random() * 100) + 1;

let attempts = 0;
let maxAttempts = 7;
let guessedNumbers = [];

while (attempts < maxAttempts) {
  let input = prompt(`Nhập số (1-100) - Lần ${attempts + 1}/${maxAttempts}:`);

  let guess = Number(input);

  if (!Number.isInteger(guess) || guess < 1 || guess > 100) {
    alert("Vui lòng nhập số nguyên từ 1 đến 100!");
    continue;
  }

  let isDuplicate = false;
  for (let i = 0; i < guessedNumbers.length; i++) {
    if (guessedNumbers[i] === guess) {
      isDuplicate = true;
      break;
    }
  }

  if (isDuplicate) {
    alert("Bạn đã đoán số này rồi!");
    continue;
  }

  guessedNumbers.push(guess);
  attempts++;

  if (guess === target) {
    alert(`Đúng rồi! Bạn đoán đúng sau ${attempts} lần!`);
    break;
  } else if (guess < target) {
    alert("Cao hơn!");
  } else {
    alert("Thấp hơn!");
  }

  if (attempts === maxAttempts) {
    alert(`Bạn đã thua! Số đúng là: ${target}`);
  }
}
