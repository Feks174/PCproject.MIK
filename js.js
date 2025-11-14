
let p = document.createElement('p')
let br = document.createElement('br')
let num = 0 
let i = 0
const txt = document.getElementById('txt1')
let text = document.getElementById("text1")
let img = document.getElementsByClassName('img')
 


function HideText(){
    
    if (text1.style.visibility === 'visible'){
        txt1.style.color = "crimson"
        text1.style.visibility = "hidden"
        text1.style.fontSize = "0%" 
        img[0].style.width = '0px'
        
    }
    else {text1.style.visibility = 'visible'; txt1.style.color = "lime" ; text1.style.fontSize = "140%"; img[0].width = '350px' }
}
function HideText1(){
    
    if (text2.style.visibility === 'visible'){
        txt2.style.color = "crimson"
        text2.style.visibility = "hidden"
        text2.style.fontSize = "0%"
    }
    else {text2.style.visibility = 'visible'; txt2.style.color = "lime";  text2.style.fontSize = "140%" }
}
function HideText2(){
    
    if (text3.style.visibility === 'visible'){
        txt3.style.color = "crimson"
        text3.style.visibility = "hidden"
        text3.style.fontSize = "0%"
    }
    else {text3.style.visibility = 'visible'; txt3.style.color = "lime";  text3.style.fontSize = "140%" }
}
function HideText3(){
    
    if (text4.style.visibility === 'visible'){
        txt4.style.color = "crimson"
        text4.style.visibility = "hidden"
        text4.style.fontSize = "0%"
    }
    else {text4.style.visibility = 'visible'; txt4.style.color = "lime" ;  text4.style.fontSize = "140%" }
}
function HideText4(){
    
    if (text5.style.visibility === 'visible'){
        txt5.style.color = "crimson"
        text5.style.visibility = "hidden"
        text5.style.fontSize = "0%"
    }
    else {text5.style.visibility = 'visible'; txt5.style.color = "lime";  text5.style.fontSize = "140%" }
}
function HideText5(){
    
    if (text6.style.visibility === 'visible'){
        txt6.style.color = "crimson"
        text6.style.visibility = "hidden"
        text6.style.fontSize = "0%"
    }
    else {text6.style.visibility = 'visible'; txt6.style.color = "lime" ;  text6.style.fontSize = "140%"}
}