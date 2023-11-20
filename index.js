// // *****************  For ScrollBar ********************
// var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');

// for (var i = 0; i < navMenuAnchorTags.length; i++) {
//   navMenuAnchorTags[i].addEventListener('click', function(event) {
//     event.preventDefault();
//     var targetSectionID = this.textContent.trim().toLowerCase();
//     var targetSection = document.getElementById(targetSectionID);

//     targetSection.scrollIntoView({ behavior: 'smooth' });
//   });

// handle scroll event on window
// check that skills sections contain is visible or not
// ensure that initial width of colored skill divs is zero -> initialise
// start animation on every skill -> increase skill width from 0 to skill
// store skill level -> Html with the help data attribute

var progressBars = document.querySelectorAll(".skill-progress > div");
// var skillsContainer = document.getElementById('skills-container');
// var animationDone = false;

function initialiseBars(bar) {
  bar.setAttribute("data-visited", false);
  bar.style.width = 0 + "%";
}
for (var bar of progressBars) {
  initialiseBars(bar);
}

function fillBars(bar) {
  let currentWidth = 0;
  let targetWidth = bar.getAttribute("data-bar-width");
  let interval = setInterval(function () {
    if (currentWidth >= targetWidth) {
      clearInterval(interval);
      return;
    }

    currentWidth++;
    bar.style.width = currentWidth + "%";
  }, 5);
}

function checkScroll() {
  for (let bar of progressBars) {
    var barCoordinates = bar.getBoundingClientRect();
    if (
      bar.getAttribute("data-visited") == "false" &&
      barCoordinates.top <= window.innerHeight - barCoordinates.height
    ) {
      bar.setAttribute("data-visited", true);
      fillBars(bar);
    } else if (barCoordinates.top > window.innerHeight) {
      bar.setAttribute("data-visited", false);
      initialiseBar(bar);
    }
  }
}

window.addEventListener("scroll", checkScroll);

// This event fills the progress bars if they are displayed on the screen when the page is loaded.
//window.addEventListener("load", checkScroll);


//Send Message In Contact Form

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const name = document.getElementById('input-name').value;
  const email = document.getElementById('input-email').value;
  const message = document.getElementById('input-message').value;
  console.log('Message Send');
  //Send Email 
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "mrakp007@gmail.com",
    Password : "A3130A56D7DFF54B0B62959EC29DB1FDF9A9",
    To : 'kuberpatel2023@gmail.com',
    From : "mrakp007@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);

});
