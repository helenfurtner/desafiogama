var images = [];

images[0] = ['assets/images/headset.png'];
images[1] = ['assets/images/headset2.png'];
images[2] = ['assets/images/headset3.png'];
var index = 0;

function change() {
  document.getElementById("mainPhoto").src = images[index];
  if (index == 2) {
    index = 0;
  } else {
    index++;
  }

  setTimeout(change, 1000);
}

window.onload = change();