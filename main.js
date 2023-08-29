// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  const errorModal = document.getElementById("modal");
  const hearts = document.querySelectorAll(".like-glyph");

  // Add .hidden class to error modal initially
  errorModal.classList.add("hidden");

  hearts.forEach(heart => {
    heart.addEventListener("click", () => {
      mimicServerCall()
        .then(() => {
          // Toggle the activated-heart class to make heart appear red
          heart.classList.toggle("activated-heart");
          // Change heart to full heart
          heart.textContent = FULL_HEART;
        })
        .catch(error => {
          // Display error modal and message on failure
          errorModal.classList.remove("hidden");
          errorModal.textContent = error;
          
          setTimeout(() => {
            // Hide the modal after 3 seconds
            errorModal.classList.add("hidden");
          }, 3000);
        });
    });
  });
});



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
