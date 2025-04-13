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
