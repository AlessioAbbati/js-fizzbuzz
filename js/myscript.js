const eleGrid = document.querySelector(".grid");

for (let i =1; i <= 100; i++) {
    
    if (i % 15 == 0) {
        eleGrid.innerHTML = eleGrid.innerHTML + `<div class="cell">FizzBuzz</div>`
        console.log("FizzBuzz")
    } else if (i % 3 == 0) {
        eleGrid.innerHTML = eleGrid.innerHTML + `<div class="cell">Fizz</div>`
        console.log("Fizz")
    } else if (i % 5 == 0) {
        eleGrid.innerHTML = eleGrid.innerHTML + `<div class="cell">Buzz</div>`
        console.log("Buzz")
    } else {
        eleGrid.innerHTML = eleGrid.innerHTML + `<div class="cell">${i}</div>`
        console.log(i)
    }
}

