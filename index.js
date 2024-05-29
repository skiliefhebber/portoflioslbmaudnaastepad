let knopStatus = false
let buttonAfspelen = document.querySelector('.buttonafspelen');


function klikkenButton(){
    if(knopStatus == false){
        knopStatus = false
        document.getElementById("song").play(); // https//youtu.be/ZFqtk0Tsnsc?si=2Ex6hnoS0hCrAqWw
    } else{
        knopStatus = true
        document.querySelector('.pagina1').style.display = "none";
        document.querySelector('.pagina2').style.display = "block";
    }
}
buttonAfspelen.addEventListener('click', klikkenButton);
