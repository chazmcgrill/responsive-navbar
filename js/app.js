var hamburger = document.getElementsByClassName('hamburger')[0];
var menu = document.getElementsByClassName('menu')[0];
console.log(menu);

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('is-active');
  menu.classList.toggle('hidden');
}, false);
