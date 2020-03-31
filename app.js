//import isYes from './is-yes.js';

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

    output.textContent = userOutput;


}

myButton.addEventListener('click', startQuiz);
