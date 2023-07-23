// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"texts/texts.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.phrases = exports.ModalInfo = void 0;
var ModalInfo = ["Венсан Пьер Клод Белорже - диджей, представитель французской хаус-музыки, более известен под именем Kavinsky. Вдохновением для творчества Венсана служат фильмы о зомби эпохи VHS, хип-хоп и фанк последних десятилетий XX века. Исполняет треки в стиле электронных саундтреков к фильмам 1980-х годов. Музыкальные композиции и видеоклипы Белорже повествуют о вымышленном персонаже Kavinsky - молодом человеке, который погиб в 1986 году, не справившись с управлением своего красного Ferrari Testarossa, и восстал из мёртвых 20 лет спустя, для того чтобы творить собственную электронную музыку", "Orax является проектом итальянского музыканта Orax Dumollard. В 1995-2003 гг. он являлся гитаристом и композитором группы Xilema, а к 2010 году решил начать сольную карьеру. В 2012 самостоятельно выпустил свой первый альбом, а в феврале 2013 Orax уже был объявлен проектом недели на MTV new generation Italia.", "Калифорнийский электронный дуэт, давший второе дыхание музыке эпохи VHS. На данный момент являются одними из самых популярных и обсуждаемых коллективов в стиле Retrowave наряду с Perturbator и Carpenter Brut.", "«3FORCE» – трио из Санкт-Петербурга, совместный проект знаменитого drum-and-bass дуэта Gancher & Ruin и самобытного электронщика EyeScream. Отметившись множеством релизов на ведущих мировых лейблах (Position Chrome, Tainted Audio, Tympanik Audio, Blue Tunes Records), музыканты выпустили ностальгический альбом «Intergalactic», пронизанный атмосферой электронной музыки 80-х."];
exports.ModalInfo = ModalInfo;
var phrases = ['это Синтвейв (англ. Synthwave), также известный под названиями Ретровейв (англ. Retrowave), Futuresynth или Outrun (в честь эстетики одноимённой игры и альбома) — стиль электронной музыки, появившийся в середине 2000-х годов. Жанр основан на использовании синтезаторов, подражании музыке 1980-х (в частности, итало-диско) с добавлением новых технологий и попытке воспроизвести атмосферу фильмов и видеоигр той эпохи. Синтвейв достиг расцвета и популярности в 2010-е годы, на волне ностальгии, повышенного интереса к киберпанку и 1980-ым.', ' это Kavinsky', ' это Orax', ' это Dance with the Dead', ' это 3FORCE', " сотни великолепных и атмосферных треков"];
exports.phrases = phrases;
},{}],"modal/Kavinsky_modal.jpeg":[function(require,module,exports) {
module.exports = "/Kavinsky_modal.d5af2273.jpeg";
},{}],"modal/Oraxmodal.jpg":[function(require,module,exports) {
module.exports = "/Oraxmodal.dbe07f52.jpg";
},{}],"modal/Dancewiththedead_modal.jpg":[function(require,module,exports) {
module.exports = "/Dancewiththedead_modal.532338a7.jpg";
},{}],"modal/3Force_modal.jpg":[function(require,module,exports) {
module.exports = "/3Force_modal.b4a9718f.jpg";
},{}],"modal/ModalSend.jpg":[function(require,module,exports) {
module.exports = "/ModalSend.62bb9d30.jpg";
},{}],"script.js":[function(require,module,exports) {
"use strict";

var _texts = require("./texts/texts");
var _Kavinsky_modal = _interopRequireDefault(require("./modal/Kavinsky_modal.jpeg"));
var _Oraxmodal = _interopRequireDefault(require("./modal/Oraxmodal.jpg"));
var _Dancewiththedead_modal = _interopRequireDefault(require("./modal/Dancewiththedead_modal.jpg"));
var _Force_modal = _interopRequireDefault(require("./modal/3Force_modal.jpg"));
var _ModalSend = _interopRequireDefault(require("./modal/ModalSend.jpg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// массив, где хранятся данные для изменения содержимого "advice" при нажатии на кнопку

var index = 0;

// Сохранение содержимого в переменные
var minfo = document.querySelector(".minfo");
var mtitle = document.querySelector(".mtitle");
var modalimage = document.querySelector(".modalimage");
var button = document.querySelector('.button');
var phrase = document.querySelector('.phrase');

// Событие. При нажатии на кнопку мняетмся текст в "advice"
button.addEventListener('click', function () {
  if (index < _texts.phrases.length) {
    phrase.textContent = _texts.phrases[index];
    index = index + 1;
  } else {
    index = 0;
    phrase.textContent = _texts.phrases[index];
  }
  ;
});

// Создание постоянных для открытия и закртия модального окна
var modal = document.querySelector(".modal");
var overlay = document.querySelector(".overlay");
var openModalBtn1 = document.querySelectorAll(".card")[0];
var openModalBtn2 = document.querySelectorAll(".card")[1];
var openModalBtn3 = document.querySelectorAll(".card")[2];
var openModalBtn4 = document.querySelectorAll(".card")[3];
var closeModalBtn = document.querySelector(".btn-close");

// Функция вызывающая закрытие модального окна
var closeModal = function closeModal() {
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
var openModal1 = function openModal1() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  mtitle.textContent = "Кто такой Kavinsky?";
  minfo.textContent = _texts.ModalInfo[0];
  modalimage.src = _Kavinsky_modal.default;
};
var openModal2 = function openModal2() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  mtitle.textContent = "Кто такой Orax?";
  minfo.textContent = _texts.ModalInfo[1];
  modalimage.src = _Oraxmodal.default;
};
var openModal3 = function openModal3() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  mtitle.textContent = "Кто такие Dance with the Dead?";
  minfo.textContent = _texts.ModalInfo[2];
  modalimage.src = _Dancewiththedead_modal.default;
};
var openModal4 = function openModal4() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  mtitle.textContent = "Кто такие 3FORCE?";
  minfo.textContent = _texts.ModalInfo[3];
  modalimage.src = _Force_modal.default;
};

// Событие. Открытие модального окна с содержимым зависящим от карточки
openModalBtn1.addEventListener("click", openModal1);
openModalBtn2.addEventListener("click", openModal2);
openModalBtn3.addEventListener("click", openModal3);
openModalBtn4.addEventListener("click", openModal4);

// Модальное окно с содержимым текствых полей

var uname = document.querySelectorAll(".input")[0];
var email = document.querySelectorAll(".input")[1];
var errmsg1 = document.querySelectorAll(".label")[1];
var errmsg2 = document.querySelectorAll(".label")[3];
var ButtonSend = document.querySelector(".btnSnd");
var openModalSend = function openModalSend() {
  modalimage.src = _ModalSend.default;
  minfo.style.textAlign = 'center';
  if (uname.value == "") {
    uname.style.border = "3px solid red";
    errmsg1.textContent = 'Введите имя';
  } else {
    uname.style.border = "1px solid black";
    errmsg1.textContent = '';
  }
  ;
  if (email.value == "") {
    email.style.border = "3px solid red";
    errmsg2.textContent = 'Введите email';
  } else {
    email.style.border = "1px solid black";
    errmsg2.textContent = '';
  }
  ;
  if (uname.value != "" && email.value != "") {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    mtitle.textContent = document.getElementById("name").value;
    minfo.textContent = "Мы отправили подборку лучших произведений Retrowave/Synthwave на ваш электронный почтовый ящик " + '"' + document.getElementById("email").value + '"';
  }
};
ButtonSend.addEventListener("click", openModalSend);
},{"./texts/texts":"texts/texts.js","./modal/Kavinsky_modal.jpeg":"modal/Kavinsky_modal.jpeg","./modal/Oraxmodal.jpg":"modal/Oraxmodal.jpg","./modal/Dancewiththedead_modal.jpg":"modal/Dancewiththedead_modal.jpg","./modal/3Force_modal.jpg":"modal/3Force_modal.jpg","./modal/ModalSend.jpg":"modal/ModalSend.jpg"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53614" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script.js"], null)
//# sourceMappingURL=/script.75da7f30.js.map