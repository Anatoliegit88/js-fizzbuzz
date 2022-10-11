for (let i = 1; i <= 100; i++) {
  let multiplo = "";
  const numberitem = document.getElementById("id-number");
  const item = document.createElement("button");
  if (i % 3 === 0 && i % 5 === 0) {
    multiplo = "FizzBuzz";
  } else if (i % 3 === 0) {
    multiplo = "Fizz";
  } else {
    if (i % 5 === 0) {
      multiplo = "Buzz";
    } else {
      console.log(i);
      item.innerHTML = `${i}`;
      numberitem.append(item);
    }
  }
  console.log(multiplo);
  item.innerHTML = `${multiplo}`;
  numberitem.append(item);
}
// BONUS
