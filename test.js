var photo = document.getElementById("photo");
var load = document.getElementsByClassName("load");
photo.onload = (hideLoad);
photo.src = "https://morsa08.github.io/WorldsApart/Pictures/GraveyardSunsetSmall.jpg";

function hideLoad(){
  load[0].className = ("hidden");
}
