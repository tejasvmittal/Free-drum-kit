// document.querySelector("button").addEventListener("click", handleClick);

for (var i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}
document.addEventListener("keydown", handleClick);



function handleClick(event){
    // var audio = new Audio('./sounds/tom-1.mp3');
    // audio.play();
    clicked_object = this; 
    //the 'this' in this case is the object or variable that called the function which is the HTML object that was clicked on. 
    if (event.type == "click"){
        var button_letter = this.innerHTML;
    }
    else if (event.type == "keydown"){
        var button_letter = event.key;
    }
    addAnimation(button_letter);
    console.log(event);
    switch (button_letter) {
        case 'w':
            var kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();            
            break;
        case 'a':
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;
        case 's':
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;
        case 'd':
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;
        case 'j':
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;
        case 'k':
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'l':
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;    
        default:
            console.log(button_letter);
    }
    // console.log(this.className.split(' '))
}

function addAnimation(eventKey){
    var activeButton = document.querySelector("."+eventKey);
    // console.log(activeButton.classList);
    activeButton.classList.add('pressed');
    setTimeout(function(){activeButton.classList.remove("pressed")}, 100);
}
