let bowInfo = document.querySelector(".bowInfo");
let swordInfo = document.querySelector(".swordInfo");
let bowInfoTF = false;
let swordInfoTF = false;

function bowInfoButton() {
  bowInfo.style.display = "block";
  if (bowInfoTF == true) {
    bowInfo.style.display = "none";
    bowInfoTF = false;
  } else {
    bowInfoTF = true;
  }
}

function swordInfoButton() {
  swordInfo.style.display = "block";
  if (swordInfoTF == true) {
    swordInfo.style.display = "none";
    swordInfoTF = false;
  } else {
    swordInfoTF = true;
  }
}