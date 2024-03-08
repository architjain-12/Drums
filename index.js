let buttonList = document.querySelectorAll("button");
console.log(buttonList);
let soundsPath = '/sounds/';
let soundsName = {'w' : 'crash.mp3', 
                    'a' : 'kick-bass.mp3', 
                    's' : 'snare.mp3', 
                    'd' : 'tom-1.mp3', 
                    'j' : 'tom-2.mp3', 
                    'k' : 'tom-3.mp3', 
                    'l' : 'tom-4.mp3'
                };

for(i=0; i<buttonList.length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener('click', function () {
        let selectedDrum = this.innerHTML;
        let audio = new Audio(soundsPath+soundsName[selectedDrum]);
        audio.play();
    });
}

addEventListener("keydown", function (e) {
    let selectedDrum = e.key;
    if(Object.keys(soundsName).includes(e.key)) {
        let audio = new Audio(soundsPath+soundsName[selectedDrum]);
        audio.play();
    }
});