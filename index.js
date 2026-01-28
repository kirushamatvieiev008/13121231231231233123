// console.log('hello world');

// const validator = require("validator");

// const validate = email => {
//     return validator.isEmail(email)
// }

// console.log(validate('mkiril087@gmail.com'));
// console.log(validate('newEmail'));

// const { nanoid } = require('nanoid');

// console.log(nanoid(5));

// console.log('hello');

import { alert, success, error, notice } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

success({
  title: 'Успех',
  text: 'Уведомление работает 🎉'
});

error({
  title: 'Ошибка',
  text: 'Что-то пошло не так 😬'
});

