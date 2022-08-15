const refs = {
    formEl: document.querySelector('.feedback-form'),
    feedbackFormState: {
        email: '',
        message: '',
    },
    feedbackData: localStorage.getItem('feedback-form-state'),
    throttle: require('lodash.throttle'),
}

const { formEl, feedbackFormState, feedbackData, throttle } = refs;

if (JSON.parse(feedbackData)) {
    formEl[0].value = JSON.parse(feedbackData).email;
    formEl[1].value = JSON.parse(feedbackData).message;
}

function setInputData() {
    feedbackFormState.email = formEl[0].value;
    feedbackFormState.message = formEl[1].value;
    console.log(formEl[0].value);
    localStorage.setItem('feedback-form-state', JSON.stringify(feedbackFormState));
}

formEl.addEventListener('input', throttle(setInputData, 500));

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    formEl.reset();
    console.log(JSON.parse(feedbackData));
    localStorage.removeItem('feedback-form-state');
})