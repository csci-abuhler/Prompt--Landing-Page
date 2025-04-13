// Make the images along the integration section move sideways
var firstIndex = 0;
var width = 1024;
function moveImagesOne() {
  firstIndex += 1;
  document.getElementsByClassName(
    "integration-section-moving-images-section-one"
  )[0].style.transform = "translateX(" + firstIndex + "px)";

  if (firstIndex > width) {
    firstIndex = 0;
  } // if
} // move images
setInterval(moveImagesOne, 0);
