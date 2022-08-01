import {createMap} from './vendor/ymaps';

// ---------------------------------
const ymaps = window.ymaps;
window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------
  const nav = document.querySelector('[data-selector="navigation"]');
  const header = document.querySelector('[data-selector="header"]');
  const logo = document.querySelector('[data-element="logo"]');
  const toggle = document.querySelector('[data-selector="button"]');
  const map = document.querySelector('[data-element="map"]');

  nav.classList.remove('navigation--nojs');
  nav.classList.add('navigation--closed');
  map.classList.remove('map--nojs');

  header.classList.remove('header--no-js');

  toggle.addEventListener('click', function () {
    if (nav.classList.contains('navigation--closed')) {
      nav.classList.remove('navigation--closed');
      nav.classList.add('navigation--opened');
      logo.classList.add('header__logo--hidden');
    } else {
      nav.classList.add('navigation--closed');
      nav.classList.remove('navigation--opened');
      logo.classList.remove('header__logo--hidden');
    }
  });

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    ymaps.ready(createMap);
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
