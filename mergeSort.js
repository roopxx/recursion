// Function to merge two sorted arrays into a single sorted array.
function merge_Arrays(left_sub_array, right_sub_array) {
  let mergedArray = []; // Create an empty array to store the merged result.

  // While both left and right sub-arrays have elements:
  while (left_sub_array.length && right_sub_array.length) {
    // Compare the first elements of both sub-arrays.
    if (left_sub_array[0] < right_sub_array[0]) {
      // If the element from the left sub-array is smaller, add it to the merged array.
      mergedArray.push(left_sub_array.shift()); // Shift removes and returns the first element.
    } else {
      // If the element from the right sub-array is smaller or equal, add it to the merged array.
      mergedArray.push(right_sub_array.shift());
    }
  }

  // After the loop, one of the sub-arrays may still have elements left.
  // Concatenate any remaining elements from both sub-arrays to the merged array.
  return mergedArray.concat(left_sub_array).concat(right_sub_array);
}

// This is the main merge sort function.
function merge_sort(unsorted_Array) {
  if (unsorted_Array.length < 2) {
    // If the array has 1 or 0 elements, it's already sorted.
    return unsorted_Array;
  }

  // Find the middle index of the array.
  const middle_index = unsorted_Array.length / 2;

  // Split the array into two sub-arrays: left and right.
  const left_sub_array = unsorted_Array.splice(0, middle_index);

  // Recursively call merge_sort on both sub-arrays.
  const left_sorted = merge_sort(left_sub_array);
  const right_sorted = merge_sort(unsorted_Array);

  // Merge the two sorted sub-arrays back together and return the result.
  return merge_Arrays(left_sorted, right_sorted);
}

// Test the merge_sort function with an example array.
const unsorted_Array = [39, 28, 44, 4, 10, 83, 11];
console.log(merge_sort(unsorted_Array)); // Output: [4, 10, 11, 28, 39, 44, 83]
