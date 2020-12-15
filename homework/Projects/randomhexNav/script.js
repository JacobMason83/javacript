// import variables from './variables.scss'




const changeColor = document.getElementById('btnColor')
const navBar = document.getElementById('navBar')
const hexValue = document.querySelector('.hexColor')
if(changeColor) {
changeColor.addEventListener('click', () => {
    let color = '#'
    color += Math.random().toString(16).slice(2, 8)
    


    navBar.style.backgroundColor = color
    hexValue.innerText = `Poof its magic your color is now: ${color}`
})}

if (changeColor){
    changeColor.addEventListener('mouseover', () => {
        let color = '#'
        color += Math.random().toString(16).slice(2,8)

        changeColor.style.background = color
        changeColor.innerText = `Magic is everywhere lets test it`
        hexValue.innerText = `Alakazam....bibbidi-bobbidi-boo `
    })
}




