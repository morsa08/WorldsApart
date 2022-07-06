/*jshint esversion: 6 */



document.addEventListener("DOMContentLoaded", () => {

  var moon = document.getElementById("moon");
  var fade = document.getElementById("fade");
  const qualityBtn = document.getElementById("qualityBtn");


  if (fade != null) {
    fade.style.opacity = 1;
    fade.style.opacity = 0;
    fade.style.opacity = 1;
  }

  if (moon != null) {
    moon.addEventListener("click", function() {
      i = 0;
      pictureSwap();
    });

  }

  function pictureSwap() {

    var image = document.getElementsByClassName("mainBackground")[i];
    if (image.src.match("Electrical")) {
      image.src = "Pictures/FabianRZRonBusWEBSITESmall.jpg";
      image.setAttribute("high-res-src", "Pictures/FabianRZRonBusWEBSITE.jpg");
      image.setAttribute("class", "picturesToBeSwapped");


    } else {
      image.src = "Pictures/Electrical-Station-Small.jpg";
      image.setAttribute("high-res-src", "Pictures/Electrical Station.jpg");
      image.setAttribute("class", "picturesToBeSwapped");
    }
  }

  // SET RES-IMAGE-REPLACEMENT, AND RUN LAZYLOADERSETUP ON EACH IMAGE
  resImageReplacements = document.getElementsByClassName('res-image-replacement');




  if (qualityBtn != null) {
    qualityBtn.addEventListener("click", highQualityOption);
  }

  function highQualityOption() {
    for (let i = 0; i < resImageReplacements.length; i++) {
      lazyLoaderSetup(i);
    }
  }



  function lazyLoaderSetup(i) {
    highResImage = document.createElement("IMG");
    lowResImage = document.getElementsByClassName('picturesToBeSwapped')[0];
    resReplacement = document.getElementsByClassName("res-image-replacement")[i];

    // SET HIGH RES IMAGE UP WITH CLASS, ID, AND HIGH RES SOURCE
    highResImage.setAttribute("class", "mainBackground");
    highResImage.setAttribute('src', lowResImage.getAttribute("high-res-src"));

    // IF THE LOW RES IMAGE CLASS EXISTS, ADD THE LOAD LISTENER WHICH WILL RUN REMOVEAPPEND FUNCTION
    if (resReplacement.contains(lowResImage)) {
      highResImage.addEventListener('load', removeAppend());
    }
  }




  // REMOVE THE LOW RES ELEMENT, ADD THE HIGH RES ELEMENT, REMOVE LISTENER
  function removeAppend() {
    resReplacement.removeChild(lowResImage);
    resReplacement.appendChild(highResImage);
    highResImage.removeEventListener('load', removeAppend);

  }



  // CAROUSEL

  document.querySelectorAll(".carousel-container").forEach((carousel) => {
    insertNumbers(carousel);

    carousel.querySelector(".prev").addEventListener("click", (e) => {
      minusItem(carousel);
    });

    carousel.querySelector(".next").addEventListener("click", () => {
      plusItem(carousel);
    });

    insertDots(carousel);

    carousel.querySelectorAll(".dot").forEach((dot) => {
      dot.addEventListener("click", (e) => {
        let item = Array.prototype.indexOf.call(
          e.target.parentNode.children,
          e.target
        );

        showItems(carousel, item);
      });
    });

    showItems(carousel, 0);
  });
});

function insertNumbers(carousel) {
  const length = carousel.querySelectorAll(".item").length;
  for (let i = 0; i < length; i++) {
    const nmbr = document.createElement("div");
    nmbr.classList.add("numbertext");
    nmbr.innerText = i + 1 + " / " + length;

    carousel.querySelectorAll(".item")[i].append(nmbr);
  }
}

function insertDots(carousel) {
  const dots = document.createElement("div");
  dots.classList.add("dots");

  carousel.append(dots);

  carousel.querySelectorAll(".item").forEach((elem) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");

    carousel.querySelector(".dots").append(dot);
  });
}

function plusItem(carousel) {
  let item = currentItem(carousel);

  carousel
    .querySelectorAll(".item")[item].nextElementSibling.classList.contains("item") ?
    showItems(carousel, item + 1) :
    showItems(carousel, 0);
}

function minusItem(carousel) {
  let item = currentItem(carousel);

  carousel.querySelectorAll(".item")[item].previousElementSibling != null ?
    showItems(carousel, item - 1) :
    showItems(carousel, carousel.querySelectorAll(".item").length - 1);
}

function currentItem(carousel) {
  return [...carousel.querySelectorAll(".item")].findIndex(
    (item) => item.style.display == "block"
  );
}

function showItems(carousel, item) {
  if (carousel.querySelectorAll(".item")[currentItem(carousel)] != undefined)
    carousel.querySelectorAll(".item")[currentItem(carousel)].style.display =
    "none";
  carousel.querySelectorAll(".item")[item].style.display = "block";

  if (carousel.querySelector(".dot.active") != null)
    carousel.querySelector(".dot.active").classList.remove("active");
  carousel.querySelectorAll(".dot")[item].classList.add("active");
}
