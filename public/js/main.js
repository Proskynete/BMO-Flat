(function(){
  setTimeout(function(){
    const screen = document.querySelector(".bmo__head__screen");
    const img = document.createElement("img");

    img.src = "./public/img/adventure_time.gif";
    img.setAttribute('class', 'bmo__head__screen__gif');

    screen.innerHTML = "";
    screen.appendChild(img);
  }, 5000);
})();
