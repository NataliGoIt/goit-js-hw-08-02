import throttle from "lodash.throttle";
const LOCALSTORAGE_KEY = "feedback-form-state",
  formEl = document.querySelector(".feedback-form");

formEl.addEventListener("input", throttle(formInput, 500));
formEl.addEventListener("submit", submitForm);
initForm();
function initForm() {
  let getMassages = localStorage.getItem(LOCALSTORAGE_KEY);
  if (getMassages) {
    getMassages = JSON.parse(getMassages);
    Object.entries(getMassages).forEach(([name, value]) => {
      formEl.elements[name].value = value;
    });
  }
}
function formInput(e) {
  let getMassages = localStorage.getItem(LOCALSTORAGE_KEY);
  getMassages = getMassages ? JSON.parse(getMassages) : {};
  getMassages[e.target.name] = e.target.value;
  let saveMassages = localStorage.setItem(
    LOCALSTORAGE_KEY,
    JSON.stringify(getMassages)
  );
}
function submitForm(e) {
  e.preventDefault();
  localStorage.removeItem(LOCALSTORAGE_KEY);

  const formData = new FormData(formEl);
  formData.forEach((value, name) => console.log({ name, value }));

  formEl.reset();
}
