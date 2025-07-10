// Function to find the minimum (earliest) date in an array
function minDate(dates) {
  // Clone the array to avoid modifying the original input
  const sortedDates = [...dates].sort();
  // Return the first (earliest) date
  return sortedDates[0];
}

// Example 1
const dates1 = ["2023/03/01", "2023/03/02", "2023/03/03"];
console.log("Earliest date:", minDate(dates1)); 
// Expected Output: "2023/03/01"

// Example 2
const dates2 = ["2023/01/01", "2023/02/02", "2022/12/31"];
console.log("Earliest date:", minDate(dates2)); 
// Expected Output: "2022/12/31"

// Example 3 - same year but different months
const dates3 = ["2025/06/10", "2025/01/15", "2025/04/30"];
console.log("Earliest date:", minDate(dates3)); 
// Expected Output: "2025/01/15"

// Example 4 - same year and month, different days
const dates4 = ["2024/12/25", "2024/12/01", "2024/12/10"];
console.log("Earliest date:", minDate(dates4)); 
// Expected Output: "2024/12/01"

