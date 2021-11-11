/*jshint esversion: 6 */

var moon = document.getElementById("moon");
 if (moon != null) {
  moon.addEventListener("click", function() {
    pictureSwap();
  });

}

function pictureSwap() {

  var image = document.getElementById("mainBackground");
  if (image.src.match("Electrical")) {
    image.src = "Pictures/FabianRZRonBusWEBSITESmall.jpg";
    image.setAttribute("high-res-src", "Pictures/FabianRZRonBusWEBSITE.jpg");
    image.setAttribute("class", "picturesToBeSwapped");


  } else {
    image.src = "Pictures/Electrical-Station-Small.jpg";
    image.setAttribute("high-res-src", "Pictures/Electrical Station.jpg");
    image.setAttribute("class", "picturesToBeSwapped");

  }
ResImageReplacement(newElement)


}

var newElement = document.getElementById("mainBackground");

// HIGH RES BACKGROUND LOADER


function ResImageReplacement(newElement) {
  var highResImage = document.createElement("IMG");
  var lowResImage = document.getElementsByClassName('picturesToBeSwapped')[0];
  var resReplacement = document.getElementsByClassName("res-image-replacement")[0];
  highResImage.setAttribute("class", "mainBackground");
  highResImage.setAttribute("id", "mainBackground");
  highResImage.setAttribute('src', lowResImage.getAttribute("high-res-src"));
  highResImage.addEventListener('load',
    () => {
      resReplacement.removeChild(lowResImage);
      resReplacement.appendChild(highResImage);
    });



}

let resImageReplacements = document.getElementsByClassName('res-image-replacement');

for (let i = 0; i < resImageReplacements.length; i++) {
  ResImageReplacement(resImageReplacements[i]);

}

// CAROUSEL

document.addEventListener("DOMContentLoaded", () => {
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
