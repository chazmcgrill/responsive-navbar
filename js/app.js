var hamburger = document.querySelector('.hamburger');
var menu = document.querySelector('.menu');
var nav = document.querySelector('nav');

window.addEventListener('resize', function(event) {
  if (event.target.innerWidth >= 640) {
    nav.style.display = 'block';
  } else {
    nav.style.display = 'none';
    hamburger.classList.remove('is-active');
  }
});

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('is-active');
  nav.style.display = nav.style.display === 'none' ? 'block' : 'none';
}, false);
