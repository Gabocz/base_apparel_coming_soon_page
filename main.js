const emailInput = document.getElementById('emailInput');
const warningContainer = document.getElementById('warningContainer')

emailInput.addEventListener('input', checkEmail)

function checkEmail () {
    const userInput = emailInput.value 
    const regEx = /^\S+@\S+\.\S+$/;
    if(userInput && !regEx.test(userInput)) {
        emailInput.style.background = `url('./images/icon-error.svg') no-repeat top 13px right 52px`
        emailInput.style.boxShadow = 'inset -1px 0 0 var(--softRed), inset 0 -1px 0 var(--softRed), inset 1px 0 0 var(--softRed), inset 0 1px 0 var(--softRed)'; 
        warningContainer.style.visibility = 'visible';

    } else {
        emailInput.style.boxShadow = '';
        warningContainer.style.visibility = 'hidden';
        emailInput.style.background = '';

    }
}
