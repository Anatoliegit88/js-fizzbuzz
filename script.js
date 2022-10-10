for (let i = 1; i <= 100; i++) {
  let multiplo = "";
  if (i % 3 === 0 && i % 5 === 0) {
    multiplo = "FizzBuzz";
  } else if (i % 3 === 0) {
    multiplo = "Fizz";
  } else {
    if (i % 5 === 0) {
      multiplo = "Buzz";
    } else {
      console.log(i);
    }
  }
  console.log(multiplo);
}
