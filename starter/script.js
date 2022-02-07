'use strict';

/*
//NOTE: use querySelector to access DOM elements
console.log(document.querySelector('.message'));
//NOTE: use textContent property of querySelector to access DOM elements tect content
console.log('textConent: ' + document.querySelector('.message').textContent);
// Command + Control + Space = for emoji's icons

//NOTE: To set the text content to DOM element
document.querySelector('.message').textContent = '👍 Correct Number!';
// console.log('textConent: ' + document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

//NOTE: to set the value in the guess textbox
document.querySelector('.guess').value = 15;
//NOTE: to read the value in the guess textbox
console.log(document.querySelector('.guess').value);
*/

//NOTE: get a scecrete number between 1 to 20
const secreteNumber = Math.trunc(Math.random() * 20) + 1;
// Display Randome number in ?
document.querySelector('.number').textContent = secreteNumber;

//NOTE: using addEventListener to add click event. When check button is clicked,
// addEventListener for click event and a fucntion is implemented for click event
document.querySelector('.check').addEventListener('click', function () {
  //NOTE: by default, the value from any input field is a string value.
  // SO, we need to convert it to a number using Number method
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess);
  // console.log(typeof guess);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number';
  } else if (guess === secreteNumber) {
    document.querySelector('.message').textContent = '👏 Correct number!';
  } else if (guess > secreteNumber) {
    document.querySelector('.message').textContent = '🤒Too high!';
  } else if (guess < secreteNumber) {
    document.querySelector('.message').textContent = '⬇️ Too low!';
  }
});
