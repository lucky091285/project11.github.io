export {api, addUser, userPhoto, usName, usJob};

import {Card} from './card.js';



const jaqName = document.querySelector('.user-info__name');
const jaqJob = document.querySelector('.user-info__job');
const userPhoto = document.querySelector('.user-info__photo');
const usName = document.querySelector('#username');
const usJob = document.querySelector('#userjob');

// Функция загрузки 

function renderLoading(isLoading) {
    if(isLoading) {
      submit2.textContent = 'Загрузка...';
    } else {
      submit2.textContent = 'Сохранить';
    }
  }

function addUser() {
    jaqName.textContent = form2.elements.username.value;
    jaqJob.textContent = form2.elements.userjob.value; 
  };

class Api {
    constructor({baseUrl, cohortID, headers,}) {
      this.baseUrl = baseUrl
      this.cohortID = cohortID
      this.headers = headers
      // тело конструктора
      /**
       * Надо исправить
       * 
       * Переданный объект с параметрами api не используется
       * Лучше записывать конкретные параметры в свойства для использования
       * по всему классу
       * constructor({baseUrl, headers}) 
       * 
       * this.baseUrl = baseUrl
       * this.headers = headers
       */
    }
  
  // Загрузка профиля при загрузке страницы
  
    loadProfile() { 
      /**
       * Надо исправить
       * 
       * Адреса берем из свойств класса - они могут меняться и так только в одном месте
       * при инициализации new Api можно передать, а использовать в шаблонной строке
       * `${this.baseUrl}/${this.cohortID}/users/me`
       */
      fetch(`${this.baseUrl}/${this.cohortID}/users/me`, {
        headers: this.headers
      })
          .then(res => res.json())
          .then(({name, about, avatar}) => {
            if (name && about && avatar) {
            // Надо исправить
            // Перед обновлением элементов стоит проверять что данные пришли корректно
            // then(({name, about, avatar}))
            // if (name && about && avatar) {}
            jaqName.textContent = name;
            jaqJob.textContent = about;
            userPhoto.style.backgroundImage = `url(${avatar})`;
            }
          })
          .catch((err) => {
            console.log('Ошибка. Запрос не выполнен: ', err);
        });
        }
      
  //  Открытие формы профиля с данными с сервера
  
  openProfile() { 
    usName.value = jaqName.textContent;
    usJob.value = jaqJob.textContent;
    // submit2.textContent = 'Сохранить';        
  }
  
        // Изменение профиля
  
  editProfile() {
    fetch(`${this.baseUrl}/${this.cohortID}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
          name: form2.elements.username.value,
          about: form2.elements.userjob.value,
  
      })
    })
    .then(res => res.json())
    .then(() => {
      renderLoading(true);
    })
    .catch((err) => {
      console.log('Ошибка. Запрос не выполнен: ', err);
    })
    .finally(() => {
    renderLoading(false);
    });
    }
  
    // Загрузка картинок
  
  loadCard() {
      fetch(`${this.baseUrl}/${this.cohortID}/cards`, {
        headers: this.headers
    })
        .then(res => res.json())
        .then((data) => {
          if(data && data.length > 0) {
          data.forEach(function(item) {
          const card = new Card(item.name, item.link);
            card.addCard();
        })      
        }
        })
        .catch((err) => {
          console.log('Ошибка. Запрос не выполнен: ', err);
      });
    }
  
  //  Добавление новой карточки
  
  addPlace() {
    fetch(`${this.baseUrl}/${this.cohortID}/cards`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name: form1.elements.placename.value,
        link: form1.elements.link.value
    })
    })
    .then((res) => {
      return res.json();
    })
  }
  
  // Смена аватарки
  
  editAvatar() {
    fetch(`${this.baseUrl}/${this.cohortID}/users/me/avatar`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        avatar: form3.elements.link.value,
    })
    })
    .then((res) => {
      return res.json();
    })
  }
  
  }

  let url;

  if (NODE_ENV === 'production') {
      url='https://praktikum.tk';
  } else {
      url='http://praktikum.tk';
  }

  const api = new Api({
    baseUrl: url,
    cohortID: 'cohort1',
    headers: {
      authorization: '54bc3077-f332-488b-8fa2-e6f5fbfbe80e',
      'Content-Type': 'application/json'
    }
  });