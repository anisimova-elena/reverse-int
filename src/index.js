module.exports = function reverse (n) {
    let i = 0;
    if (n < 0) {
        n *= -1;
    }
  while (n > 0) {
      i = i * 10 + n % 10;
      n = (n - n % 10) / 10;
  }
  return i;
}
