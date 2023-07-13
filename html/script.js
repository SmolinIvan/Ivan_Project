


// Изменение текста при нажатии на Retrowave?
let phrases = ['это Синтвейв (англ. Synthwave), также известный под названиями Ретровейв (англ. Retrowave), Futuresynth или Outrun (в честь эстетики одноимённой игры и альбома) — стиль электронной музыки, появившийся в середине 2000-х годов. Жанр основан на использовании синтезаторов, подражании музыке 1980-х (в частности, итало-диско) с добавлением новых технологий и попытке воспроизвести атмосферу фильмов и видеоигр той эпохи. Синтвейв достиг расцвета и популярности в 2010-е годы, на волне ностальгии, повышенного интереса к киберпанку и 1980-ым.',
' это Kavinsky', ' это Orax', ' это Dance with the Dead', ' это 3FORCE', " сотни великолепных и атмосферных треков"];


let index = 0;


let minfo = document.querySelector(".minfo");
let mtitle = document.querySelector(".mtitle");
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
const openModalBtn3 = document.querySelectorAll(".card")[2];
const openModalBtn4 = document.querySelectorAll(".card")[3];
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
  mtitle.textContent = "Кто такой Kavinsky?";
  minfo.textContent =  "Венсан Пьер Клод Белорже - диджей, представитель французской хаус-музыки, более известен под именем Kavinsky. Вдохновением для творчества Венсана служат фильмы о зомби эпохи VHS, хип-хоп и фанк последних десятилетий XX века. Исполняет треки в стиле электронных саундтреков к фильмам 1980-х годов. Музыкальные композиции и видеоклипы Белорже повествуют о вымышленном персонаже Kavinsky - молодом человеке, который погиб в 1986 году, не справившись с управлением своего красного Ferrari Testarossa, и восстал из мёртвых 20 лет спустя, для того чтобы творить собственную электронную музыку";  ;
  modalimage.src = "modal/Kavinsky_modal.jpeg";
};

const openModal2 = function() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    mtitle.textContent = "Кто такой Orax?"
    minfo.textContent = "Orax является проектом итальянского музыканта Orax Dumollard. В 1995-2003 гг. он являлся гитаристом и композитором группы Xilema, а к 2010 году решил начать сольную карьеру. В 2012 самостоятельно выпустил свой первый альбом, а в феврале 2013 Orax уже был объявлен проектом недели на MTV new generation Italia.";
    modalimage.src = "modal/Oraxmodal.jpg"
};

const openModal3 = function() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    mtitle.textContent = "Кто такие Dance with the Dead?"
    minfo.textContent = "Калифорнийский электронный дуэт, давший второе дыхание музыке эпохи VHS. На данный момент являются одними из самых популярных и обсуждаемых коллективов в стиле Retrowave наряду с Perturbator и Carpenter Brut.";
    modalimage.src = "modal/Dancewiththedead_modal.jpg"
};

const openModal4 = function() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    mtitle.textContent = "Кто такие 3FORCE?"
    minfo.textContent = "«3FORCE» – трио из Санкт-Петербурга, совместный проект знаменитого drum-and-bass дуэта Gancher & Ruin и самобытного электронщика EyeScream. Отметившись множеством релизов на ведущих мировых лейблах (Position Chrome, Tainted Audio, Tympanik Audio, Blue Tunes Records), музыканты выпустили ностальгический альбом «Intergalactic», пронизанный атмосферой электронной музыки 80-х. "
    modalimage.src = "modal/3Force_modal.jpg"
};

// open modal event
openModalBtn1.addEventListener("click", openModal1);
openModalBtn2.addEventListener("click", openModal2);
openModalBtn3.addEventListener("click", openModal3);
openModalBtn4.addEventListener("click", openModal4);