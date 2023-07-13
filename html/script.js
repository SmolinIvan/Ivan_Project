// Изменение текста при нажатии на Retrowave?
let phrases = ['это Синтвейв (англ. Synthwave), также известный под названиями Ретровейв (англ. Retrowave), Futuresynth или Outrun (в честь эстетики одноимённой игры и альбома) — стиль электронной музыки, появившийся в середине 2000-х годов. Жанр основан на использовании синтезаторов, подражании музыке 1980-х (в частности, итало-диско) с добавлением новых технологий и попытке воспроизвести атмосферу фильмов и видеоигр той эпохи. Синтвейв достиг расцвета и популярности в 2010-е годы, на волне ностальгии, повышенного интереса к киберпанку и 1980-ым.',
' это Kavinsky', 'это Orax', 'это Dance with the Dead', 'это 3FORCE', " сотни великолепных и атмосферных треков"];


let index = 0;


let minfo = document.querySelector(".minfo");
let modalimage = document.querySelector(".modalimage");
let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');

button.addEventListener('click', function() {
    if (index < phrases.length) {
    phrase.textContent = phrases[index]
    index = index + 1;} else {
        index = 0
        phrase.textContent = phrases[index];
    };
}
);





// Модальное окно
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn1 = document.querySelectorAll(".card")[0];
const openModalBtn2 = document.querySelectorAll(".card")[1];
const closeModalBtn = document.querySelector(".btn-close");

// close modal function
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// close the modal when the close button and overlay is clicked
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// close modal when the Esc key is pressed
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// open modal function
const openModal1 = function() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  minfo.textContent = "Венсан Пьер Клод Белорже - диджей, представитель французской хаус-музыки, более известен под именем Kavinsky. Вдохновением для творчества Венсана служат фильмы о зомби эпохи VHS, хип-хоп и фанк последних десятилетий XX века. Исполняет треки в стиле электронных саундтреков к фильмам 1980-х годов. Музыкальные композиции и видеоклипы Белорже повествуют о вымышленном персонаже Kavinsky - молодом человеке, который погиб в 1986 году, не справившись с управлением своего красного Ferrari Testarossa, и восстал из мёртвых 20 лет спустя, для того чтобы творить собственную электронную музыку";
  modalimage.src = "Kavinsky_modal.jpeg"
};

const openModal2 = function() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    minfo.textContent = "Ну наконец-то";
    modalimage.src = "Oraxmodal.jpg"
};

// open modal event
openModalBtn1.addEventListener("click", openModal1);
openModalBtn2.addEventListener("click", openModal2);