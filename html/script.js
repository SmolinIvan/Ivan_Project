import {ModalInfo} from './texts/texts';
import {phrases} from './texts/texts';
import KavinskyModalImage  from './modal/Kavinsky_modal.jpeg';
import OraxModalImage from './modal/Oraxmodal.jpg';
import DancewiththedeadModalImage from './modal/Dancewiththedead_modal.jpg';
import ThreeForceImage from './modal/3Force_modal.jpg';
import ModalSendImage from './modal/ModalSend.jpg';


// массив, где хранятся данные для изменения содержимого "advice" при нажатии на кнопку

let index = 0;

// Сохранение содержимого в переменные
let minfo = document.querySelector(".minfo");
let mtitle = document.querySelector(".mtitle");
let modalimage = document.querySelector(".modalimage");
let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');

// Событие. При нажатии на кнопку мняетмся текст в "advice"
button.addEventListener('click', function() {
    if (index < phrases.length) {
    phrase.textContent = phrases[index]
    index = index + 1;} else {
        index = 0
        phrase.textContent = phrases[index];
    };
}
);

// Создание постоянных для открытия и закртия модального окна
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn1 = document.querySelectorAll(".card")[0];
const openModalBtn2 = document.querySelectorAll(".card")[1];
const openModalBtn3 = document.querySelectorAll(".card")[2];
const openModalBtn4 = document.querySelectorAll(".card")[3];
const closeModalBtn = document.querySelector(".btn-close");

// Функция вызывающая закрытие модального окна
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// События. При нажатии на оверлей или кнопку закрытия, модалка закрывается
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// Событие. Модалка закрывается при нажатии на Esc
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// Функция вызывающая открытие модального окна для карточки Kavinsky
const openModal1 = function() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  mtitle.textContent = "Кто такой Kavinsky?";
  minfo.textContent = ModalInfo[0]; 
  modalimage.src = KavinskyModalImage;
};

const openModal2 = function() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    mtitle.textContent = "Кто такой Orax?"
    minfo.textContent = ModalInfo[1];
    modalimage.src = OraxModalImage;
};

const openModal3 = function() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    mtitle.textContent = "Кто такие Dance with the Dead?"
    minfo.textContent = ModalInfo[2];
    modalimage.src = DancewiththedeadModalImage;
};

const openModal4 = function() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    mtitle.textContent = "Кто такие 3FORCE?"
    minfo.textContent = ModalInfo[3];
    modalimage.src = ThreeForceImage;
};

// Событие. Открытие модального окна с содержимым зависящим от карточки
openModalBtn1.addEventListener("click", openModal1);
openModalBtn2.addEventListener("click", openModal2);
openModalBtn3.addEventListener("click", openModal3);
openModalBtn4.addEventListener("click", openModal4);

// Модальное окно с содержимым текствых полей

let uname = document.querySelectorAll(".input")[0];
let email = document.querySelectorAll(".input")[1];
let ButtonSend = document.querySelector(".btnSnd");

const openModalSend = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  modalimage.src = ModalSendImage;
  minfo.style.textAlign = 'center';
  mtitle.textContent = document.getElementById("name").value;
  minfo.textContent = "Мы отправили подборку лучших произведений Retrowave/Synthwave на ваш электронный почтовый ящик " + '"' + document.getElementById("email").value + '"';
};

ButtonSend.addEventListener("click", openModalSend);