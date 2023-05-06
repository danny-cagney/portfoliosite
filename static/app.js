const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)

function typewriter(text) {
    var i = 0;
    var speed = 200;
    var container = document.getElementById("typewriter");
  
    function type() {
      if (i < text.length) {
        container.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
  
    type();
  }




function typewriter(texts) {
    var i = 0;
    var j = 0;
    var speed = 150;
    var container = document.getElementById("typewriter");
  
    function type() {
      if (i < texts.length) {
        if (j < texts[i].length) {
          container.innerHTML += texts[i].charAt(j);
          j++;
          setTimeout(type, speed);
        } else {
          i++;
          j = 0;
          setTimeout(type, 1000); // Wait 1 second before starting the next text
          container.innerHTML = ""; // Clear the container before typing the next text
        }
      } else {
        // Restart the loop once all the texts have been typed
        i = 0;
        j = 0;
        setTimeout(type, 1000); // Wait 1 second before restarting the loop
      }
    }
  
    type();
  }

function typewriter_white(texts) {
    var i = 0;
    var j = 0;
    var speed = 150;
    var container = document.getElementById("typewriter_white");
  
    function type() {
      if (i < texts.length) {
        if (j < texts[i].length) {
          container.innerHTML += texts[i].charAt(j);
          j++;
          setTimeout(type, speed);
        } else {
          i++;
          j = 0;
          setTimeout(type, 1000); // Wait 1 second before starting the next text
          container.innerHTML = ""; // Clear the container before typing the next text
        }
      } else {
        // Restart the loop once all the texts have been typed
        i = 0;
        j = 0;
        setTimeout(type, 1000); // Wait 1 second before restarting the loop
      }
    }
  
    type();
  }

window.addEventListener('load', function() {
    typewriter(["Data, Tech & Software Entrepreneurship"]);
  });

window.addEventListener('load', function() {
    typewriter_white(["Data, Tech & Software Entrepreneurship"]);
  });