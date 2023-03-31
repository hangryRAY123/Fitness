import {iosVhFix} from './utils/ios-vh-fix';
import {initTabs} from './modules/tabs/init-tabs';
import {Form} from './modules/form-validate/form';
import {lazySizes} from './vendor/lazysizes';
import {ItcSlider} from './vendor/itc-slider';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  const picture = document.querySelectorAll('[data-validate="picture"]');
  const slider = document.querySelectorAll('.itc-slider');
  const tabs = document.querySelector('[data-tabs="content"]');

  tabs.classList.remove('tabs__content--nojs');

  picture.forEach((e) => {
    e.style.display = 'block';
  });

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initTabs();
    const form = new Form();
    window.form = form;
    form.init();
    lazySizes();
    slider.forEach((el) => {
      ItcSlider.getOrCreateInstance(el);
    });
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

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
