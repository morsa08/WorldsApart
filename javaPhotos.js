/*jshint esversion: 6 */

const gridContainer = document.getElementById("gridContainer");
const photoArray = [];

if (gridContainer) {
  photoArray.push("Pictures/ParkingGarage.jpg");
  photoArray.push("Pictures/GoldenGateSmall.jpg");
  photoArray.push("Pictures/Shark.jpg");
  photoArray.push("Pictures/Electrical-Station-Small.jpg");
  photoArray.push("Pictures/DallasSmall.jpg");
  photoArray.push("Pictures/GoldenGateDark.jpg");
  photoArray.push("Pictures/GraveyardSunsetSmall.jpg");
  photoArray.push("Pictures/camping.jpg");
  photoArray.push("Pictures/DallasDrive.jpg");
  photoArray.push("Pictures/FrontYard.jpg");
  photoArray.push("Pictures/GlowBall.jpg");
  photoArray.push("Pictures/jasmin.jpg");
  photoArray.push("Pictures/NightStreamer.jpg");
  photoArray.push("Pictures/RobPattern.jpg");
  photoArray.push("Pictures/SnowFall.jpg");
  photoArray.push("Pictures/Splatter.jpg");
  // photoArray.push("Pictures/meSmall.jpg");

  for (i = 0; i < photoArray.length; i++) {
    const newGrid = document.createElement("img");
    var link = document.createElement("a");
    newGrid.className = "grid-item";
    newGrid.src = photoArray[i];
    link.href = newGrid.src;
    gridContainer.appendChild(newGrid);
    newGrid.appendChild(link);
  }
}
