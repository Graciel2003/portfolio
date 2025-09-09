const toggle = document.getElementById('menu-toggle')
const menu = document.getElementById('menu')
toggle.addEventListener('click', ()  =>{
    toggle.classList.toggle('active')
    menu.style.display = menu.style.display === 'block'?'none' : 'block'
})
function toggleTexte(){
    const suite = document.getElementById("suite")
    const points = document.getElementById("points")
    const btn = document.getElementById("btnToggle")
    if(suite.style.display === "none"){
        suite.style.display = "inline"
        points.style.display = "none"
        btn.textContent = "Lire moins"
    }
    else {
        suite.style.display = "none"
        points.style.display = "inline"
        btn.textContent = "Lire la suite"
    }
}
function toggleTexte2(){
    const suite = document.getElementById("suite2")
    const points = document.getElementById("points2")
    const btn = document.getElementById("btnToggle2")
    if(suite.style.display === "none"){
        suite.style.display = "inline"
        points.style.display = "none"
        btn.textContent = "Lire moins"
    }
    else {
        suite.style.display = "none"
        points.style.display = "inline"
        btn.textContent = "Lire la suite"
    }
}
function toggleTexte3(){
    const suite = document.getElementById("suite3")
    const points = document.getElementById("points3")
    const btn = document.getElementById("btnToggle3")
    if(suite.style.display === "none"){
        suite.style.display = "inline"
        points.style.display = "none"
        btn.textContent = "Lire moins"
    }
    else {
        suite.style.display = "none"
        points.style.display = "inline"
        btn.textContent = "Lire la suite"
    }
}
function toggleTexte4(){
    const suite = document.getElementById("suite4")
    const points = document.getElementById("points4")
    const btn = document.getElementById("btnToggle4")
    if(suite.style.display === "none"){
        suite.style.display = "inline"
        points.style.display = "none"
        btn.textContent = "Lire moins"
    }
    else {
        suite.style.display = "none"
        points.style.display = "inline"
        btn.textContent = "Lire la suite"
    }
}
function toggleTexte5(){
    const suite = document.getElementById("suite5")
    const points = document.getElementById("points5")
    const btn = document.getElementById("btnToggle5")
    if(suite.style.display === "none"){
        suite.style.display = "inline"
        points.style.display = "none"
        btn.textContent = "Lire moins"
    }
    else {
        suite.style.display = "none"
        points.style.display = "inline"
        btn.textContent = "Lire la suite"
    }
}
function toggleTexte6(){
    const suite = document.getElementById("suite6")
    const points = document.getElementById("points6")
    const btn = document.getElementById("btnToggle6")
    if(suite.style.display === "none"){
        suite.style.display = "inline"
        points.style.display = "none"
        btn.textContent = "Lire moins"
    }
    else {
        suite.style.display = "none"
        points.style.display = "inline"
        btn.textContent = "Lire la suite"
    }
}