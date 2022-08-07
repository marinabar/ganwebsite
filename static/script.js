function abstract() {
    img = document.getElementById("mainimg");
    nombre = Math.floor(Math.random() * 22);
    img.src =`../static/images/abs${nombre}.png`;
    image(img)
  }

function imp() {
    img = document.getElementById("mainimg");
    nombre = Math.floor(Math.random() * 25);
    img.src =`../static/images/imp${nombre}.png`;
    image(img)
  }

function clouds() {
    img = document.getElementById("mainimg");
    nombre = Math.floor(Math.random() * 23);
    img.src =`../static/images/nua${nombre}.png`;
    image(img)
  }

function piz() {
    img = document.getElementById("mainimg")
    nombre = Math.floor(Math.random() * 20);
    img.src =`../static/images/pizza${nombre}.png`;
    image(img) 
  }

  // function that changes images caracteristics
function image(img) {
    img.style.border = '1vh solid black';
    img.style.height = "30vh";
    img.style.boxShadow = "3vh 3vh yellow, -3vh -3vh white, 3.5vh 3.5vh black, 4.5vh 4.5vh red";
    img.style.marginBottom = "7vh";
    document.getElementById("floating").style.visibility = "visible";
}