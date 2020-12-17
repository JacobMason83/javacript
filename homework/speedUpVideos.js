// Write me a program that gives me the ability to play a video at at least 3 different speeds, (slow, regular, fast), 
// where slow is half speed, regular is normal speed, and fast is double. Push your code to github.

// get the video link and set it to a variable 
// write a function that either adds a hotkeys to speed it up 
const chooseYourRate = (e) => { 
    // sets the window event depending on the browser 
    const windowEvent = window.event ? event : e 
    
// ctrl + enter for regular speed and setting to to that hotkey
    if(windowEvent.keyCode === 13 && windowEvent.ctrlKey) {
        const video =  document.querySelector('video')
        video.playbackRate = 1.0
    } // ctrl + delete for double speed and setting it to that hotkey
    else if (windowEvent.keyCode === 46 && windowEvent.ctrlKey) {
        const video =  document.querySelector('video')
        video.playbackRate = 2.0
    } // ctrl + / for half speed and setting it to that hotkey combo
    else if(windowEvent.keyCode === 111 && windowEvent.ctrlKey) {
        const video =  document.querySelector('video')
        video.playbackRate = 0.5
    } // if ctr + numkey 0 will stop the video and setting ito to that key combo
    else if (windowEvent.keyCode === 96 && windowEvent.ctrlKey) {
        const video =  document.querySelector('video')
        video.playbackRate = 0.0 // stopping it 
    }
}
document.onkeydown = chooseYourRate //changing it on the screen
