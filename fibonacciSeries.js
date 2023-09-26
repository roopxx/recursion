// Iteration method using a loop

function generateFibonacciSeries(n) {
  const series = [0, 1]; // Declaring the first and second number of series

  for (let i = 2; i < n; i++) {
    // looping till n-th integer of series
    const nextNumber = series[i - 1] + series[i - 2]; // calculating next number from preceding last two num in the array
    series.push(nextNumber); // pushing the next number to the array
  }

  return series; // returning final array
}

const fibonacciSeries1 = generateFibonacciSeries(10);
console.log(fibonacciSeries1); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

// Using Recursion
function generateFibonacciSeriesRecursive(n) {
  if (n <= 0) {
    // null case
    return [];
  } else if (n === 1) {
    // base case 1
    return [0];
  } else if (n === 2) {
    // base case 2
    return [0, 1];
  } else {
    // for n > 2
    const series = generateFibonacciSeriesRecursive(n - 1); // recursive call when n > 2
    const nextNumber = series[series.length - 1] + series[series.length - 2]; // calculating next number from preceding last two num in the array
    series.push(nextNumber); // pushing the next number to the array
    return series; // returning final array of series
  }
}

const fibonacciSeries2 = generateFibonacciSeriesRecursive(5);
console.log(fibonacciSeries2); // [0, 1, 1, 2, 3];
