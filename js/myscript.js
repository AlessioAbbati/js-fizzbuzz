const eleGrid = document.querySelector(".grid");

for (let i =0; i <= 100; i++) {
    console.log(i)
    eleGrid.innerHTML = eleGrid.innerHTML + `<div class="cell">${i}</div>`;
    
    if (i % 15 ==0) {
        document.write("FizzBuzz" + " ");
    }
    else if (i % 3 == 0) {
        document.write("Fizz" + " ");
    }
    else if (i % 5 == 0) {
        document.write("Buzz" + " ");
    }
    else {
        document.write(i + " ");
    }
}

