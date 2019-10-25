'use strict';

{
  const images = ["main-image1.jpg","main-image2.jpg","main-image3.jpg","main-image4.jpg","main-image5.jpg"];
  const mainImage = document.getElementById('main-image');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');

  let currentNum = 0;

  function setMainImage() { 
    mainImage.style.backgroundImage = "url(images/" + images[currentNum] + ")";
  }

  setMainImage();

  next.addEventListener('click', () => {
    if (currentNum === images.length - 1){
      currentNum = 0;
    }
    currentNum++;
    setMainImage();
  });

  prev.addEventListener('click', () => {
    if (currentNum === 0 ){
      currentNum = images.length - 1;
    }
    currentNum--;
    setMainImage();
  });

  const modal = document.getElementsByClassName('modal');
  const button = document.getElementsByClassName('button');
  const mask = document.getElementById('mask');
  const close = document.getElementsByClassName('close');

  for (let i = 0; i < button.length; i++){
    button[i].addEventListener('click', () => {
      modal[i].classList.remove('hidden');
      mask.classList.remove('hidden');
    })
  }

  for (let i = 0; i < close.length; i++) {
    close[i].addEventListener('click', () => {
      modal[i].classList.add('hidden');
      mask.classList.add('hidden');
    })
  }

  mask.addEventListener('click', () => {
    for (let i = 0; i < close.length; i++) {
      close[i].click();
    }
  })
}