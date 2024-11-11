
// try: Contains code that might throw an error.
// catch: Catches and handles any errors thrown in the try block.
// finally: Executes code that should run regardless of whether an error occurred or not (optional).

function divide(a, b) {
    try {
      if (b === 0) {
        throw new Error("Cannot divide by zero!");  // Manually throw an error
      }
      return a / b;
    } catch (error) {
      console.error("Error:", error.message);  // Handle the error gracefully
      return null;  // Return a fallback value
    } finally {
      console.log("Execution complete.");  // Always runs
    }
  }
  
  console.log(divide(10, 2));  // Output: 5
  console.log(divide(10, 0));  // Output: Error: Cannot divide by zero!
                               // Execution complete.
                               // null
