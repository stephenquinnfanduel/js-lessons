console.log("loaded")
const initialButtonState = {
    buttonLabel : "Light is On",
    roomColour : "yellow",
    isLightOn : true
}

const clickButton = () => {
    if (initialButtonState.isLightOn === true){
        initialButtonState.isLightOn = false
        btn.innerHTML = "Light is Off"
        document.body.style.background = "white"
    }
    else{
        initialButtonState.isLightOn = true
        btn.innerHTML = initialButtonState.buttonLabel
        document.body.style.background = initialButtonState.roomColour
    }
}

const btn = document.querySelector("#light-switch")

btn.innerHTML = initialButtonState.buttonLabel
document.body.style.background = initialButtonState.roomColour

btn.addEventListener("click", clickButton)

