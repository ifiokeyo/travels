
function toggleBtn() {
  const logindiv = document.getElementById('login-form');

  if (logindiv.style.opacity == 0) {
    logindiv.style.opacity = 1;
    logindiv.style.visibility = "visible"

  }
  else {
    logindiv.style.opacity = 0;
    logindiv.style.visibility = "hidden"
  }
}

