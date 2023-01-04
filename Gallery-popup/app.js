const images =  document.querySelectorAll(".gallery img");
const modalImg  = document.querySelector(".modal img");
const modal  = document.querySelector(".modal");
const fullImg  = document.querySelector(".full-img");

images.forEach( function (img){

  img.addEventListener('click', function() {

  const  imgIndex  = img.getAttribute('alt');

  modalImg.src = `img/full/${imgIndex}.jpg`; 

  modal.classList.add("open");
  fullImg.classList.add("open");

  });

});

modal.addEventListener("click", function (e) {
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
    fullImg.classList.remove("open");
  }
});

