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


    changeColor.addEventListener('mouseover', (e) => {
        let color = '#'
        color += Math.random().toString(16).slice(2,8)

        changeColor.style.background = color
        changeColor.innerText = `Magic is everywhere lets test it`
        hexValue.innerText = `Alakazam....bibbidi-bobbidi-boo `
    })


    changeColor.addEventListener('mouseout', (e) => {
        let color = '#'
        color += Math.random().toString(16).slice(2,8)
        e.target.innerText = 'Wanna See Something Cool'
        changeColor.style.background = color
        const changeBack = e.target.parentElement.children[1]
        changeBack.innerText = 'Color'

    })






