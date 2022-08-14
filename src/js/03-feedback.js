import throttle from 'lodash.throttle'

const refs = {
    form: document.querySelector('.js-feedback-form'),
    textarea: document.querySelector('.js-feedback-form textarea'),
    input: document.querySelector('.js-feedback-form input'),
};

refs.form.addEventListener('submit', throttle(onFormSubmit, 500));
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
refs.input.addEventListener('input', throttle(onInputInput, 500));

savedMessage();

function onFormSubmit(event) {
    event.preventDefault();
    console.log('Submit');
    event.currentTarget.reset();
    localStorage.removeItem('feedback-msg-message');
    localStorage.removeItem('feedback-msg-email');
};

function onTextareaInput(evt) {
    const message = evt.currentTarget.value;
    console.log(message);
    localStorage.setItem('feedback-msg-message', message);
};
function onInputInput(evt) {
    const email = evt.currentTarget.value;
    console.log(email);
    localStorage.setItem('feedback-msg-email', email);
};
function savedMessage() {
    const saveMSG = localStorage.getItem('feedback-msg-message');
    const saveEMAIL = localStorage.getItem('feedback-msg-email');
    if(saveEMAIL){
        refs.input.value = saveEMAIL;
    }
    if(saveMSG){
        refs.textarea.value = saveMSG;
    }
}
