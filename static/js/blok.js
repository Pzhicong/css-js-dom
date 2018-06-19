const arr = [];
console.time('cong');
for (let i = 0; i < 10000000; i++) {
  arr.push(i);
  arr.splice(i % 3, i % 7, i % 5);
}
console.timeEnd('cong');
const div = document.querySelector('div');
console.log(div);