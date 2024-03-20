const check_perfect_list = (numbers, distance) => {
  for (let i = 0; i < numbers.length - 2; i++) {
    for (let j = i + 1; j <= i + 2; j++) {
      if (Math.abs(numbers[j] - numbers[i]) > distance) return 0;
    }
  }
  return 1;
};

console.log(check_perfect_list([1, 4, 3, 2, 3], 3));
console.log(check_perfect_list([10, 2, 11], 5));
console.log(check_perfect_list([5, 6, 13, 15, 7, 10, 40], 10));
console.log(check_perfect_list([12, 20, 14, 21, 15, 13], 8));
