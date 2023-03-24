const form = document.getElementById('back');
function retrieveFormValue(event) {
  event.preventDefault();
  window.location.href='index.html';

}
form.addEventListener('submit', retrieveFormValue);