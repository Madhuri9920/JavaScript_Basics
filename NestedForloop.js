
// A nested for loop means you have one for loop running inside another for loop. 
// The inner loop completes all its iterations for each iteration of the outer loop.

for (let i = 1; i <= 3; i++) {       // Outer loop (iterates 3 times)
    for (let j = 1; j <= 2; j++) {     // Inner loop (iterates 2 times for each outer loop iteration)
      console.log(i, j);
    }
  }

  