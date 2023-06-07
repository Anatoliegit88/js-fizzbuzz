const row = document.querySelector(".row");
//CICLO FOR

for (let i = 1; i <= 100; i++) {
  let result = i;
  let boxColor = "";
  if (i % 3 === 0 && i % 5 === 0) {
    result = "FizzBuzz";
    boxColor = "bg-black";
  } else if (i % 3 === 0) {
    result = "Fizz";
    boxColor = "bg-yellow";
  } else if (i % 5 === 0) {
    result = "Buzz";
    boxColor = "bg-red";
  } else {
    result = i;
  }

  // OUTPUT
  const box = document.createElement("div");
  box.innerHTML = result;
  box.classList.add("box");
  if (boxColor !== "") {
    box.classList.add(boxColor);
  }
  row.append(box);

  // const element = `<div class="box" ${boxColor}>${result}</div>`;
  // row.innerHTML += element;
}
