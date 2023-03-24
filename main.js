const form1 = document.getElementById('auth');
const form2 = document.getElementById('reg');

function retrieveFormValue(event) {
  event.preventDefault();
  window.location.href='auth.html';

}
function retrieveForm2Value(event) {
  event.preventDefault();
  window.location.href='reg.html';

}

form1.addEventListener('submit', retrieveFormValue);
form2.addEventListener('submit', retrieveForm2Value);