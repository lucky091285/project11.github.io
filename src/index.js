import "./style.css";
import './images/close.svg';
import './images/logo.svg';
import {placesList} from './card.js';
import {api, usName, usJob} from './api.js';
import {handleValidate} from './validation.js';
import {cardList} from './cardlist.js';
import {placeBtn, userBtn, avatarBtn, placeName, placeLink, popImage, newAvatar} from './popup.js';
import {sendProfile, sendAvatar} from './forms.js';

const form1 = document.querySelector('#form1');
const submit1 = document.querySelector('#submit1');

const form2 = document.querySelector('#form2');
const submit2 = document.querySelector('#submit2');

const form3 = document.querySelector('#form3');
const submit3 = document.querySelector('#submit3');

// Слушатели

submit1.addEventListener('click', cardList.sendForm);
submit2.addEventListener('click', sendProfile);
submit3.addEventListener('click', sendAvatar);

placeName.addEventListener('input', handleValidate);
placeLink.addEventListener('input', handleValidate);

usName.addEventListener('input', handleValidate);
usJob.addEventListener('input', handleValidate);

newAvatar.addEventListener('input', handleValidate);

form1.addEventListener('input', placeBtn);
form2.addEventListener('input', userBtn);
form3.addEventListener('input', avatarBtn);

//Увеличение картинки

placesList.addEventListener('click', function(event) {
  if (event.target.classList.contains('place-card__image')) {
    const  popupImage= document.querySelector('.popup__image');
    popupImage.src = event.target.style.backgroundImage.slice(5,-2);
    popImage.zoomImage();
  }  
});

api.loadProfile();
api.loadCard();