"use strict";

const bigImage = document.getElementById('wazzup');
const previewItems = document.querySelectorAll('.grid__preview-item');
const imgPop = document.querySelector('.popup__item');
let gallery = Array.from(previewItems);
const x = gallery.forEach(
  (item) => {
    item.addEventListener('click', (event) =>
      {
        if (item) {
          
          let imgSource = item.getAttribute('src');
          
          imgPop.setAttribute('src', imgSource);
          
          bigImage.classList.add('main__popup_visible');
          isImageVisible = true
          
        } else {
          return;
        }
      }
    )
  }
);


let isImageVisible = false;
const selectedImage = document.querySelector('.popup__substrate');

function hideImage() {
  if (isImageVisible) {
    bigImage.classList.remove('main__popup_visible');
    isImageVisible = false
  } else {
    return;
  }
}

selectedImage.addEventListener('click', hideImage);
