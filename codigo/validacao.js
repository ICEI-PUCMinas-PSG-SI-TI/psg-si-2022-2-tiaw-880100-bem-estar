var nameInput = document.getElementById("nome");

nameInput.addEventListener("input", () => {
  nameInput.setCustomValidity("");
  nameInput.checkValidity();
});

nameInput.addEventListener("invalid", () => {
  if (nameInput.value === "") {
    nameInput.setCustomValidity("preencha seu nome!");
  } else {
    nameInput.setCustomValidity(
      "Esse campo aceita apenas letras maiuscular e minusculas!"
    );
  }
});

var email = document.getElementById("email");

email.addEventListener("input", () => {
  email.setCustomValidity("");
  email.checkValidity();
});
email.addEventListener("invalid", () => {
  if (email.value === "") {
    email.setCustomValidity("preencha seu email!");
  } else {
    email.setCustomValidity(
      "Escreva o email corretamente!"
    );
  }
});