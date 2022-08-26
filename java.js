/*jshint esversion: 6 */

  var counter = 0;
  var index = 0;
  var slide = document.getElementById("slide");
  const photoArray = [];
  var slideArray;

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

  for (let x = 0; x < photoArray.length - 1; x++) {
    photoArray[x].onload = onLoadCallback();
  }


    function allLoadedCallback() {
      document.getElementsByClassName("loadContainer")[0].className = "loadContainerHidden";
    }

    function onLoadCallback() {
      counter++;
      if (counter == (photoArray.length - 1)) {
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
    startSlide(slide, index);
