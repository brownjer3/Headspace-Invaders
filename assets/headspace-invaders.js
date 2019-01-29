let icons = document.querySelectorAll('i');


function flipIcons() {
  for (let i=0; i<icons.length; i++) {
    icons[i].classList.toggle("flip");
  };
};

setInterval(flipIcons, 1500);


