// Defining text characters for the empty and full hearts for you to use later.More actions
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const hearts = document.querySelectorAll('.like-glyph')
const error = document.getElementById("modal")

for (let i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener('click', () => {
    mimicServerCall()
      .then(() => {
        if (hearts[i].textContent === EMPTY_HEART) {
          hearts[i].textContent = FULL_HEART;
          hearts[i].classList.add('activated-heart');
        } else {
          hearts[i].textContent = EMPTY_HEART;
          hearts[i].classList.remove('activated-heart');
        }
      })
      .catch(() => {
        error.classList.remove('hidden');
        setTimeout(() => error.classList.add('hidden'), 3000);
      });
  });
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
