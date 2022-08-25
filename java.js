/*jshint esversion: 6 */




document.addEventListener("DOMContentLoaded", () => {


  var index = 0;
  var slide = document.getElementById("slide");
  if (slide) {
    const slideArray = slide.childNodes;
    const photoArray = [];
    photoArray.push("Pictures/ParkingGarage.jpg");
    photoArray.push("Pictures/GoldenGateSmall.jpg");
    photoArray.push("Pictures/Shark.jpg");
    photoArray.push("Pictures/Electrical-Station-Small.jpg");
    photoArray.push("Pictures/DallasSmall.jpg");
    photoArray.push("Pictures/GoldenGateDark.jpg");
    photoArray.push("Pictures/GraveyardSunsetSmall.jpg");

    var counter = 0;

   function allLoadedCallback() {
      document.getElementsByClassName("loadContainer")[0].className = "loadContainerHidden";
    }

   function onLoadCallback() {
      counter++;
      if (counter == (slideArray.length -1)) {

        allLoadedCallback();
      }

    }






    function appendImages() {
      for (i = 0; i < photoArray.length; i++) {
        newImage = document.createElement("img");
        newImage.src = photoArray[i];
        slide.appendChild(newImage);
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


    for (let x = 0; x< photoArray.length; x++){
    photoArray[x].onload = onLoadCallback() ;}

    startSlide(slide, index);
  }
});
