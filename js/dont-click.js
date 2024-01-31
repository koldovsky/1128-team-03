let counter = 100;

function handleClick() {
  if (counter !== 0) {
    counter--;
    if (counter < 50) {
      showWarning();
    }
  } else {
    downloadFile();
  }

  document.querySelector(".why-choose-us__items-counter").innerText = counter;
}

function showWarning() {
  document.querySelector(".why-choose-us__items-warning").style.display =
    "block";
}

function downloadFile() {
  const link = document.createElement("a");
  link.href = "../files/42.zip";
  link.download = "42.zip";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const clickableImages = document.querySelectorAll(".why-choose-us__item img");

clickableImages.forEach((img) => {
  img.addEventListener("click", handleClick);
});
