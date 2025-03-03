const $firstRightButton = document.querySelector(".first-to-second");
const $firstInfos = document.querySelector(".first-infos");
const $firstLeftButton = document.querySelector(".first-to-four");

// second button
const $secondLeftButton = document.querySelector(".second-to-first");
const $secondInfos = document.querySelector(".second-infos");
const $secondRightButton = document.querySelector(".second-to-third");

// third button
const $thirdLeftButton = document.querySelector(".third-to-second");
const $thirdInfos = document.querySelector(".third-infos");
const $thirdRightButton = document.querySelector(".third-to-four");

// fourth button
const $fourLeftButton = document.querySelector(".four-to-third");
const $fourInfos = document.querySelector(".four-infos");
const $fourRightButton = document.querySelector(".four-to-first");


const $testimonialAuthor = document.querySelector(".testimonial-author")

const data = [
    {
        author: "",
        content: ""
    },
    {
        author: "",
        content: ""
    },
]

$testimonialAuthor.textContent = data[0].author




// first button

$firstLeftButton.addEventListener("click", function () { 
    $firstInfos.classList.add("hidden");
    $fourInfos.classList.remove("hidden");
  });

$firstRightButton.addEventListener("click", function () {
  $firstInfos.classList.add("hidden");
  $secondInfos.classList.remove("hidden");
});

// second button

$secondLeftButton.addEventListener("click", function () {
  $secondInfos.classList.add("hidden");
  $firstInfos.classList.remove("hidden");
});

$secondRightButton.addEventListener("click", function () {
  $secondInfos.classList.add("hidden");
  $thirdInfos.classList.remove("hidden");
});

// third button

$thirdLeftButton.addEventListener("click", function () {
  $thirdInfos.classList.add("hidden");
  $secondInfos.classList.remove("hidden");
});

$thirdRightButton.addEventListener("click", function () {
  $thirdInfos.classList.add("hidden");
  $fourInfos.classList.remove("hidden");
});

// fourth button

$fourLeftButton.addEventListener("click", function () {
  $fourInfos.classList.add("hidden");
  $thirdInfos.classList.remove("hidden");
});

$fourRightButton.addEventListener("click", function () {    
  $fourInfos.classList.add("hidden");
  $firstInfos.classList.remove("hidden");
});


// document.body.addEventListener('keydown', function (event) {
//     const key = event.key;
//     switch (event.key) {
//         case "ArrowLeft":
//             moveleft() = 'Left';
//             break;
//         case "ArrowRight":
//             moveright() = 'Right';
//             break;
// }});

function clickRightButton() {
    if (rightButton) {
      rightButton.click();
    }
  }
  
setInterval(clickRightButton, 15000)