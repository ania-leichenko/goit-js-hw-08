const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea');
const input = document.querySelector('input');
const STORAGE_KEY = 'feedback-form-state';
import throttle from 'lodash.throttle';
form.addEventListener('input', throttle(saveInputValues, 500));
form.addEventListener('submit', submitFunc);

const obj = {};
reloadPage();

function saveInputValues(e) {
  obj[e.target.name] = e.target.value;
  const stringifiedData = JSON.stringify(obj);
  localStorage.setItem(STORAGE_KEY, stringifiedData);
}

function reloadPage() {
  const saveValues = localStorage.getItem(STORAGE_KEY);

  if (saveValues === null) {
    return;
  } else {
    textarea.value = saveValues['message'] || '';
    input.value = saveValues['email'] || '';
  }
}

function submitFunc() {
  console.log(obj);
  localStorage.removeItem(STORAGE_KEY);
}
