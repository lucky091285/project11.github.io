!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){const n=document.querySelector(".places-list"),r=document.querySelector("#place"),o=document.querySelector("#profile"),a=document.querySelector("#avatar"),s=document.querySelector("#bigImage"),i=(document.querySelector(".user-info"),document.querySelector(".user-info__photo")),l=document.querySelector("#closeImage"),c=document.querySelector("#closeCard"),d=document.querySelector("#closeProfile"),u=document.querySelector("#closeAvatar"),p=document.querySelector(".user-info__name"),m=document.querySelector(".user-info__job"),h=document.querySelector("#form1"),v=document.querySelector("#submit1"),f=document.querySelector("#form2"),b=document.querySelector("#submit2"),_=document.querySelector("#placename"),g=document.querySelector("#placelink"),y=document.querySelector("#username"),L=document.querySelector("#userjob"),S=document.querySelector("#picavatar"),k=document.querySelector("#form3"),E=document.querySelector("#submit3");function C(e){j(e.target),q(e.target)}function q(e){const t=document.querySelector(`#error-${e.id}`);if(!e.checkValidity())return t.textContent=e.validationMessage,P(t),!1;if(!function(e){if(e.id!==username.id&&e.id!==userjob.id&&e.id!==_.id)return!0;if(e.value.length>=2&&e.value.length<=30)return j(e),!0;return!1}(e)){const e="Должно быть от 2 до 30 символов!";return t.textContent=e,P(t),!1}return!0}function P(e){e.parentNode.classList.add("popup__invalid")}function j(e){e.parentNode.classList.remove("popup__invalid"),e.textContent=""}function w(){0===_.value.length||0===g.value.length||_.value.length>30||!g.validity.valid?(v.setAttribute("disabled",!0),v.classList.add("popup__button_disabled")):(v.removeAttribute("disabled",!0),v.classList.remove("popup__button_disabled"))}function I(){y.value.length<2||L.value.length<2||y.value.length>30||L.value.length>30?(b.setAttribute("disabled",!0),b.classList.add("popup__button_disabled")):(b.removeAttribute("disabled",!0),b.classList.remove("popup__button_disabled"))}function x(){0!==S.value.length&&S.validity.valid?(E.removeAttribute("disabled",!0),E.classList.remove("popup__button_disabled")):(E.setAttribute("disabled",!0),E.classList.add("popup__button_disabled"))}b.addEventListener("click",function(e){e.preventDefault();const t=Array.from(f.elements);N.editProfile();let n=!0;if(t.forEach(e=>{e.id!==b.id&&(q(e)||(n=!1))}),!n)return!1;f.elements.username.value,f.elements.userjob.value,p.textContent=f.elements.username.value,m.textContent=f.elements.userjob.value,O.newUser()}),E.addEventListener("click",function(e){e.preventDefault();const t=Array.from(k.elements);N.editAvatar();let n=!0;if(t.forEach(e=>{e.id!==E.id&&(q(e)||(n=!1))}),!n)return!1;k.elements.link.value,i.style.backgroundImage=`url(${k.elements.link.value})`,M.avatPopup(),k.reset()}),_.addEventListener("input",C),g.addEventListener("input",C),y.addEventListener("input",C),L.addEventListener("input",C),S.addEventListener("input",C),h.addEventListener("input",w),f.addEventListener("input",I),k.addEventListener("input",x),n.addEventListener("click",function(e){if(e.target.classList.contains("place-card__image")){document.querySelector(".popup__image").src=e.target.style.backgroundImage.slice(5,-2),T.zoomImage()}});class A{constructor(e,t){this.name=e,this.link=t}addCard(){const e=document.createElement("div");e.classList.add("place-card"),e.addEventListener("mousedown",function(){r.removeAttribute("disabled")});const t=document.createElement("div");t.classList.add("place-card__image"),t.style.backgroundImage=`url(${this.link})`;const r=document.createElement("button");r.classList.add("place-card__delete-icon"),r.addEventListener("click",this.remove);const o=document.createElement("div");o.classList.add("place-card__description");const a=document.createElement("h3");a.classList.add("place-card__name"),a.textContent=this.name;const s=document.createElement("button");return s.classList.add("place-card__like-icon"),s.addEventListener("click",this.like),e.appendChild(t),t.appendChild(r),e.appendChild(o),o.appendChild(a),o.appendChild(s),n.appendChild(e),n}remove(){n.removeChild(event.target.closest(".place-card"))}like(e){e.target.classList.toggle("place-card__like-icon_liked")}}const $=new class{constructor(e){this.placesList=e}sendForm(e){e.preventDefault();const t=Array.from(h.elements);let n=!0;if(t.forEach(e=>{e.id!==v.id&&(q(e)||(n=!1))}),!n)return!1;new A(h.elements.placename.value,h.elements.link.value).addCard(),D.newCard(),h.reset()}}(n);v.addEventListener("click",$.sendForm);class U{constructor(e,t,n){this.popupPlace=e,this.popupProfile=t,this.bigImage=n}newCard(){w(),r.classList.toggle("popup_is-opened"),h.reset()}newUser(){N.openProfile(),I(),o.classList.toggle("popup_is-opened")}zoomImage(){s.classList.add("popup__content-image"),s.classList.toggle("popup_is-opened")}avatPopup(){x(),a.classList.toggle("popup_is-opened")}}const D=new U(r),O=new U(o),T=new U(s),M=new U(a);document.querySelector(".user-info__button").addEventListener("click",D.newCard),document.querySelector(".user-info__button_edit").addEventListener("click",O.newUser),document.querySelector(".user-info__photo").addEventListener("click",M.avatPopup);document.querySelector(".popup__button");l.addEventListener("click",T.zoomImage),c.addEventListener("click",D.newCard),d.addEventListener("click",O.newUser),u.addEventListener("click",M.avatPopup);const N=new class{constructor({baseUrl:e,cohortID:t,headers:n}){this.baseUrl=e,this.cohortID=t,this.headers=n}loadProfile(){fetch(`${this.baseUrl}/${this.cohortID}/users/me`,{headers:this.headers}).then(e=>e.json()).then(({name:e,about:t,avatar:n})=>{e&&t&&n&&(p.textContent=e,m.textContent=t,i.style.backgroundImage=`url(${n})`)}).catch(e=>{console.log("Ошибка. Запрос не выполнен: ",e)})}openProfile(){y.value=p.textContent,L.value=m.textContent}editProfile(){fetch(`${this.baseUrl}/${this.cohortID}/users/me`,{method:"PATCH",headers:this.headers,body:JSON.stringify({name:f.elements.username.value,about:f.elements.userjob.value})}).then(e=>e.json()).then(()=>{!function(e){b.textContent=e?"Загрузка...":"Сохранить"}(!0)}).catch(e=>{console.log("Ошибка. Запрос не выполнен: ",e)})}loadCard(){fetch(`${this.baseUrl}/${this.cohortID}/cards`,{headers:this.headers}).then(e=>e.json()).then(e=>{e&&e.length>0&&e.forEach(function(e){new A(e.name,e.link).addCard()})}).catch(e=>{console.log("Ошибка. Запрос не выполнен: ",e)})}addPlace(){fetch(`${this.baseUrl}/${this.cohortID}/cards`,{method:"POST",headers:this.headers,body:JSON.stringify({name:h.elements.placename.value,link:h.elements.link.value})}).then(e=>e.json())}editAvatar(){fetch(`${this.baseUrl}/${this.cohortID}/users/me/avatar`,{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:k.elements.link.value})}).then(e=>e.json())}}({baseUrl:"http://praktikum.tk",cohortID:"cohort1",headers:{authorization:"54bc3077-f332-488b-8fa2-e6f5fbfbe80e","Content-Type":"application/json"}});N.loadProfile(),N.loadCard()}]);