// function menghitungSampaiNilaiKe(n) {
//   let total = 0;
//   for (let i = 0; i < n; i++) {
//     total += i;
//   }
//   return total;
// }

// const t1 = performance.now();
// menghitungSampaiNilaiKe(1000000000);
// const t2 = performance.now();
// console.log(`Time Elapsed: ${t2 - t1 / 1000} seconds`);

function menghitungSampaiNilaiKeSederhana(n) {
  return (n * (n + 1)) / 2;
}

const t3 = performance.now();
const hasil = menghitungSampaiNilaiKeSederhana(3);
console.log(hasil);
const t4 = performance.now();

console.log(`Time Elapsed: ${t4 - t3 / 1000} seconds`);

// is faster
// lebih sedikit memory yang digunakan
// lebih mudah dibaca
