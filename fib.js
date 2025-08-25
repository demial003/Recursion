const fibs = (num) => {
  let result = [0, 1];
  for (let i = 2; i < num; ++i) {
    let first = result[i - 2];
    let second = result[i - 1];
    result[i] = first + second;
  }

  return result;
};

console.log(fibs(8));

const fibsRec = (num) => {
  if (num < 1) return [];
  if (num === 1) return [0];
  if (num === 2) return [0, 1];

  return [
    ...fibsRec(num - 1),
    fibsRec(num - 1)[num - 2] + fibsRec(num - 1)[num - 3],
  ];
};

console.log(fibsRec(8));
