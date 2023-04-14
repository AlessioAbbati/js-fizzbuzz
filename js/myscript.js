const eleGrid = document.querySelector(".grid");
const FB = document.querySelector(".FB") 
const F = document.querySelector(".F")
const B = document.querySelector(".B")

for (let i =1; i <= 100; i++) {
    
    if (i % 15 == 0) {
        eleGrid.innerHTML = eleGrid.innerHTML + `<div class="cell FB">FizzBuzz</div>`
        console.log("FizzBuzz")
    } else if (i % 3 == 0) {
        eleGrid.innerHTML = eleGrid.innerHTML + `<div class="cell F">Fizz</div>`
        console.log("Fizz")
    } else if (i % 5 == 0) {
        eleGrid.innerHTML = eleGrid.innerHTML + `<div class="cell B">Buzz</div>`
        console.log("Buzz")
    } else {
        eleGrid.innerHTML = eleGrid.innerHTML + `<div class="cell">${i}</div>`
        console.log(i)
    }
}

