let numbers = [];
let numArray = [42, 25, 12, 63, 48, 10, 16, 5, 30, 78];

//Using prompt for dynamic input (comment out for testing with numArray)
// for (let i = 0; i < 10; i++) {
//   let num = parseInt(prompt(`Enter number ${i + 1}:`));
//   numbers.push(num);
// }

numbers = numArray;


function bubbleSort(arr) {
  // ... (bubbleSort function code from above) ...
}

let sortedNumbers = bubbleSort(numbers);
console.log("Sorted array:", sortedNumbers);
