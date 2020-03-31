import isYes from './is-Yes.js';

// Reference needed DOM elements

const myButton = document.getElementById('button');
const output = document.getElementById('quiz-output');


function startQuiz() {
    let correctAnswers = 0;
    let name = '';
    

    alert('Ready for the quiz?');

    const confirmed = confirm('Are you sure?');
    if (confirmed === false) {
        return;
    }

    const firstName = prompt('What is your first name?');
    name = firstName;

    const lastName = prompt('What is your last name?');
    name = name + ' ' + lastName;

    const isResident = prompt('Do you live in Oregon? (Y/N)');

    let userOutput = 'Your name is ' + name;

    if (isYes(isResident) === true) {
        correctAnswers += 1;
    }

    if (correctAnswers >= 1) {
        userOutput += ' and a fellow Oregonian!';
    } else {
        userOutput += ' and you might want to visit the great Northwest!';

    }

    output.textContent = userOutput;


}

myButton.addEventListener('click', startQuiz);
