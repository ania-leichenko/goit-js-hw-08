const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
import throttle from 'lodash.throttle';
form.addEventListener('input', throttle(saveInputValues, 500));
form.addEventListener('submit', submitFunc);

let obj = {};
reloadPage();

function saveInputValues(e) {
  obj[e.target.name] = e.target.value;
  const stringifiedData = JSON.stringify(obj);
  localStorage.setItem(STORAGE_KEY, stringifiedData);
}

function reloadPage() {
  const saveValues = localStorage.getItem(STORAGE_KEY);

  if (saveValues) {
    obj = JSON.parse(saveValues);
    console.log(obj);
    Object.entries(obj).forEach(([name, value]) => {
      form.elements[name].value = value;
    });
  }
}

function submitFunc() {
  e.preventDefault();
  console.log(obj);
  localStorage.removeItem(STORAGE_KEY);
}
