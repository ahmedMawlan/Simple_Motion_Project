let menu = document.getElementById("menue")

let action = document.getElementById("actions")

menu.onclick = function(){
    menu.classList.toggle("is-active")
    action.classList.toggle("is-active")
}

let star = document.querySelector('.stars')
let moon = document.querySelector('.moon')
let mount1 = document.querySelector('.mountain1')
let mount2 = document.querySelector('.mountain2')
let boat = document.querySelector('.boat')
let river = document.querySelector('.river')
let mawlana = document.querySelector('.mawlana')
let main = document.querySelector('.main')
let head = document.querySelector('header')


window.onscroll = function(){
    let value = scrollY
    star.style.left = value +'px'
    moon.style.top = value * 4 + 'px'
    mount1.style.top = value * 1.5 +'px'
    mount2.style.top = value  + 'px'
    river.style.top = value * .3+ 'px'
    boat.style.left = value * 5 + 'px'
    mawlana.style.fontSize = value + 'px'
    if (scrollY >= 45){
        mawlana.style.fontSize = 45 + 'px'
        mawlana.style.position = 'fixed'

        if(scrollY >= 390){
            mawlana.style.display = 'none'
        }else{
            mawlana.style.display = 'block'
        }
        if(scrollY >= 80){
            main.style.background = 'linear-gradient(rgb(167 216 245), rgb(131 151 162))'
        }else{
            main.style.background = 'linear-gradient(rgb(48, 0, 45), rgb(8, 0, 17))'
        } 
        if(scrollY >= 470 ){
            head.style.display = 'none'
        }else{
            head.style.display = 'flex'
        }
    console.log(value)
    } 
}

