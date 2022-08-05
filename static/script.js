function abstract() {
    img = document.getElementById("mainimg")
    img.src ="https://www.w3schools.com/js/pic_bulboff.gif"
  }

function imp() {
    img = document.getElementById("mainimg")
    img.src ="https://www.w3schools.com/js/pic_bulboff.gif"
  }

function clouds() {
    img = document.getElementById("mainimg")
    img.src ="https://www.w3schools.com/js/pic_bulboff.gif"
  }

function piz() {
    img = document.getElementById("mainimg")
    nombre = Math.floor(Math.random() * 10);
    img.src =`../static/images/pizza${nombre}.png`
    img.style ="height:30vh; border: 1vh solid black; box-shadow: 3vh 3vh yellow, -3vh -3vh white, 3.5vh 3.5vh black, 4.5vh 4.5vh red"
    document.getElementById("floating").style.visibility= "visible"
  }