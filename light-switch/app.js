console.log("loaded")

const isOdd = numberToCheck => numberToCheck % 2 === 1 
let buttonClicks = 0

const btn = document.createElement("button")
btn.innerHTML = "Switch On"
document.body.style.background = 'yellow';
btn.onclick = () => {
    buttonClicks = buttonClicks +1
    if (isOdd(buttonClicks) === true){
        btn.innerHTML = "Switch Off"
        document.body.style.background = 'white';
    }
    else {
        btn.innerHTML = "Switch On"
        document.body.style.background = 'yellow';
    }
}
  
document.body.appendChild(btn)