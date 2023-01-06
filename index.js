const buttons = document.querySelectorAll(".drum")

const numberOfDrumButtons = buttons.length
for (var i = 0; i < numberOfDrumButtons; i++){
    buttons[i].addEventListener("click", function(){
        const buttonInnerHTML = this.innerHTML
        buttonChecker(buttonInnerHTML)
        activateOnPress(buttonInnerHTML)
    })
}

document.addEventListener("keydown", function(event){
    buttonChecker(event.key)
    activateOnPress(event.key)
})

function buttonChecker(buttonPressed){
    switch (buttonPressed) {
        case "w":
            const tom1 = new Audio('/sounds/tom-1.mp3')
            tom1.play()
            break;
        case "a":
            const tom2 = new Audio('/sounds/tom-2.mp3')
            tom2.play()
            break;
        case "s":
            const tom3 = new Audio('/sounds/tom-3.mp3')
            tom3.play()
            break;               
        case "d":
            const tom4 = new Audio('/sounds/tom-4.mp3')
            tom4.play()
            break;    
        case "j":
            const crash = new Audio('/sounds/crash.mp3')
            crash.play()
            break;    
        case "k":
            const kick = new Audio('/sounds/kick-bass.mp3')
            kick.play()
            break;
        case "l":
            const snare = new Audio('/sounds/snare.mp3')
            snare.play()
            break;        
        default:
            console.log("Wrong key")
            break;
    }
}

function activateOnPress(key){
    const activeButton = document.querySelector("." + key)
    activeButton.classList.toggle("pressed")
        setTimeout(() => {
            activeButton.classList.remove("pressed")
        }, 100);
}