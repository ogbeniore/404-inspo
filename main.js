const toggleButton = document.getElementById('toggle-button');
toggleButton.addEventListener('click', toggleOpen);

function toggleOpen() {
  toggleButton.classList.toggle('open');
};