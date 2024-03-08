let buttonList = document.querySelectorAll("button");
let soundsPath = '/sounds/';
let soundsName = ['crash.mp3', 'kick-bass.mp3', 'snare.mp3', 'tom-1.mp3', 'tom-2.mp3', 'tom-3.mp3', 'tom-4.mp3']
for(i=0; i<buttonList.length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener('click', function () {
        console.log('Click');
        let randomSoundName = soundsName[Math.floor((Math.random()*7)+1)];
        let audio = new Audio(soundsPath+randomSoundName);
        audio.play();
    });
}
// console.log(buttonList);
// buttonList.forEach((x) => {
//     console.log(x);
//     x.addEventListener('Click', function () {
//         console.log('Click');
//     });
// })
