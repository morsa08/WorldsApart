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
  // photoArray.push("Pictures/GraveyardSunsetSmall.jpg");

for (i=0; i<photoArray.length; i++){
const newGrid = document.createElement("img");
newGrid.className="grid-item";
newGrid.src = photoArray[i];
gridContainer.appendChild(newGrid);
}
}
