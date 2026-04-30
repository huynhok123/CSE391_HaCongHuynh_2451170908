// Đoạn 1:
function counter() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count,
  };
}
const c = counter();
console.log(c.increment()); // ???
console.log(c.increment()); // ???
console.log(c.increment()); // ???
console.log(c.decrement()); // ???
console.log(c.getCount()); // ???

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var:", i), 100);
}
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let:", j), 200);
}
