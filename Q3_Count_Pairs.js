const count_pairs = (number_list, power, distance) => {
  let countPair = 0;
  for (let i = 0; i < number_list.length; i++) {
    for (let j = i + 1; j < number_list.length; j++) {
      const distanceOfPowerNums = Math.abs(
        Math.pow(number_list[i], power) - Math.pow(number_list[j], power)
      );
      const isNumDivisible =
        number_list[i] % power === 0 || number_list[j] % power === 0;
      if (distanceOfPowerNums <= distance && isNumDivisible) countPair++;
    }
  }
  return countPair;
};

console.log(count_pairs([1, 2, 3, 4, 6, 10], 3, 200));
console.log(count_pairs([5, 1, 7, 4, 10, 12, 8], 2, 400));
console.log(count_pairs([10, 20, 40, 30], 2, 700));
console.log(count_pairs([30, 40, 50, 4, 6, 9, 11], 3, 1000));
