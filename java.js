/*jshint esversion: 6 */

var counter = 0;
var index = 0;
var slide = document.getElementById("slide");
const photoArray = [];

// IF SLIDE DIV EXISTS THEN PUSH PHOTOS INTO SLIDEARRAY
if (slide) {
  slideArray = slide.childNodes;
  photoArray.push("Pictures/ParkingGarage.jpg");
  photoArray.push("Pictures/GoldenGateSmall.jpg");
  photoArray.push("Pictures/Shark.jpg");
  photoArray.push("Pictures/Electrical-Station-Small.jpg");
  photoArray.push("Pictures/DallasSmall.jpg");
  photoArray.push("Pictures/GoldenGateDark.jpg");
  photoArray.push("Pictures/GraveyardSunsetSmall.jpg");
}

 function allLoadedCallback() {
  document.getElementsByClassName("loadContainer")[0].className = "loadContainerHidden";
      console.log("all loaded callback triggered");
}

function onLoadCallback() {
  counter++;
  console.log("photo accounted for ");
  if (counter == 2) {
    console.log("all loaded");
    allLoadedCallback();
  }
}

function appendImages() {
  for (i = 0; i < photoArray.length; i++) {
    newImage = document.createElement("img");
    newImage.onload = (onLoadCallback);
    newImage.src = photoArray[i];
    slide.appendChild(newImage);
    console.log(newImage);
  }
}

function startSlide() {
  function fadeIn(slide) {
    slide.className = ("fade");
  }

  function fadeOut(slide) {
    slide.className = ("");
  }

  fadeOut(slideArray[index]);
  index++;

  if (index === slideArray.length) {
    index = 0;
  }

  fadeIn(slideArray[index]);
  setTimeout(function() {
      startSlide();
    },
    4000);
}

appendImages(photoArray);
startSlide(slide, index);
