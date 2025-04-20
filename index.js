window.onload = function () {
  // Check if button is clicked in qna section
  document.getElementById("question-one-button").addEventListener(
    "click",
    function () {
      document.getElementById("question-one-answer").hidden = false;
      document.getElementById("question-two-answer").hidden = true;
      document.getElementById("question-three-answer").hidden = true;
      document.getElementById("question-four-answer").hidden = true;
      document.getElementById("question-five-answer").hidden = true;
    },
    true
  );

  document.getElementById("question-two-button").addEventListener(
    "click",
    function () {
      document.getElementById("question-two-answer").hidden = false;
      document.getElementById("question-one-answer").hidden = true;
      document.getElementById("question-three-answer").hidden = true;
      document.getElementById("question-four-answer").hidden = true;
      document.getElementById("question-five-answer").hidden = true;
    },
    true
  );

  document.getElementById("question-three-button").addEventListener(
    "click",
    function () {
      document.getElementById("question-three-answer").hidden = false;
      document.getElementById("question-one-answer").hidden = true;
      document.getElementById("question-two-answer").hidden = true;
      document.getElementById("question-four-answer").hidden = true;
      document.getElementById("question-five-answer").hidden = true;
    },
    true
  );

  document.getElementById("question-four-button").addEventListener(
    "click",
    function () {
      document.getElementById("question-four-answer").hidden = false;
      document.getElementById("question-one-answer").hidden = true;
      document.getElementById("question-two-answer").hidden = true;
      document.getElementById("question-three-answer").hidden = true;
      document.getElementById("question-five-answer").hidden = true;
    },
    true
  );

  document.getElementById("question-five-button").addEventListener(
    "click",
    function () {
      document.getElementById("question-five-answer").hidden = false;
      document.getElementById("question-one-answer").hidden = true;
      document.getElementById("question-two-answer").hidden = true;
      document.getElementById("question-three-answer").hidden = true;
      document.getElementById("question-four-answer").hidden = true;
    },
    true
  );

  // Change underline of footer menu links
  var length = document.querySelectorAll(".footer-menu-item").length;
  var menuList = document.querySelectorAll(".footer-menu-item");
  var lineList = document.querySelectorAll(".footer-menu-item-underline");

  // Event listeners are added
  for (let i = 0; i < length; i++) {
    // When the mouse is not over
    menuList[i].addEventListener("mouseover", function () {
      lineList[i].style.width = "100%";
    }); // event listener

    // When the mouse is over
    menuList[i].addEventListener("mouseout", function () {
      lineList[i].style.width = "0%";
    }); // event listener
  } // for
};
