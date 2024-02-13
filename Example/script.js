x = 0
console.log(x)
const btn = document.getElementById("btn")
const counter = document.querySelector(".counter")
const title = document.querySelector(".title")
const handleClick = function() {
    x += 1
    counter.innerText = x
    console.log(x)
    if (x%2==0) {
        title.style.color = "green"
    }
    else {
        title.style.color = "red"
    }
}
btn.addEventListener("click", handleClick)