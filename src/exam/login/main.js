const id = document.querySelector(".id");
const password = document.querySelector(".password");
const button = document.querySelector(".button");
const warnings = document.querySelector(".warnings");

function buttonChange() {
  button.style.background = "#74b816";
  button.style.color = "black";
}

function buttonRollback() {
  button.style.background = "rgba(0, 0, 0, 0.1)";
  button.style.color = "rgba(0, 0, 0, 0.4)";
}


password.onkeyup = () => {
  if( password.value.length < 8 || password.value.length > 20  ) {
    warnings.style.color = 'red';
    buttonRollback()
    button.disabled = true;
  } else {
    warnings.style.color = 'white';
    buttonChange();
    button.disabled = false;
  }
}

button.onclick = () => {
     alert (`${id.value}님 어서오세요.`)
}

