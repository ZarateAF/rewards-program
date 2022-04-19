export const rewardCalculated = (price) => {
  let total = 0;
  if (price > 100) {
    total = 50 + (price - 100) * 2;
  } else {
    if (price > 50) {
      total = price - 50;
    }
  }
  return total;
};
