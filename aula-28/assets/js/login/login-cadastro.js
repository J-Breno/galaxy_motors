(function (win, doc, DOM) {
  "use strict";

  const $emailCadastro = new DOM('[data-js="email-cadastro"]');
  const $formLogin = new DOM('[data-js="form-login"]');
  const $formCadastro = new DOM('[data-js="form-cadastro"]');
  const $btnCadastro = new DOM('[data-js="btn-cadastro"]');
  const $respostaCadastro = new DOM('[data-js="resposta-cadastro"]');
  const $pass = new DOM('[data-js="pass-cadastro"]');
  const $passConfirm = new DOM('[data-js="pass-cadastro-confirm"]');
  const $nameCadastro = new DOM('[data-js="name-cadastro"]');
  const $imgPass = new DOM('img[data-js="senha-cadastro"]');
  const $imgPassConfirm = new DOM('img[data-js="confirme-senha"]');
  const $entreLogin = new DOM("a.inscreva");
  const textH2 = new DOM(".text h2");
  const textP = new DOM(".text p");

  let isEmailValid = "";
  let isPassValid = "";
  let isPassConfirm = "";
  let passValid = "";
  let nameValid = "";

  $btnCadastro.on("click", handleClickCadastro);
  $imgPass.on("click", handleClickImgPass);
  $imgPassConfirm.on("click", handleClickImgPassConfirm);
  $nameCadastro.on("keyup", keyUpName);
  $emailCadastro.on("keyup", keyUpEmail);
  $pass.on("keyup", keyUpPass);
  $passConfirm.on("keyup", keyUpPassConfirm);
  $entreLogin.on("click", irParaLogin);

  if (!$formCadastro.get()[0].classList.contains("none")) {
    textH2.get()[0].innerHTML = "<h2>Olá! <br> Seja Bem-Vindo(a)!</h2>";
    textP.get()[0].innerHTML =
      "<p>Faça Cadastro e venha ser Galáxia Motors:<br> A marca que leva você para as estrelas.</p>";
  } else {
    textH2.get()[0].innerHTML =
      "<h2>Olá! <br> Seja bem-vindo(a) de volta.</h2>";
    textP.get()[0].innerHTML =
      "<p>Faça login para continuar acessando a página</p>";
  }

  function irParaLogin(e) {
    e.preventDefault();

    $formLogin.forEach((item2) => item2.classList.toggle("none"));
    $formCadastro.forEach((item3) => item3.classList.toggle("none"));
    $pass.get()[0].value = "";
    $passConfirm.get()[0].value = "";
    $emailCadastro.get()[0].value = "";
    $nameCadastro.get()[0].value = "";
    $passConfirm.get()[0].classList.remove("acert-pass");
    $passConfirm.get()[0].classList.remove("error-pass");
    $pass.get()[0].classList.remove("acert-pass");
    $pass.get()[0].classList.remove("error-pass");
    $emailCadastro.get()[0].classList.remove("error-email");
    $emailCadastro.get()[0].classList.remove("acert-email");
    $nameCadastro.get()[0].classList.remove("error-email");
    $nameCadastro.get()[0].classList.remove("acert-email");

    if (!$formCadastro.get()[0].classList.contains("none")) {
      textH2.get()[0].innerHTML = "<h2>Olá! <br> Seja Bem-Vindo(a)!</h2>";
      textP.get()[0].innerHTML =
        "<p>Faça Cadastro e venha ser Galáxia Motors:<br> A marca que leva você para as estrelas.</p>";
    } else {
      textH2.get()[0].innerHTML =
        "<h2>Olá! <br> Seja bem-vindo(a) de volta.</h2>";
      textP.get()[0].innerHTML =
        "<p>Faça login para continuar acessando a página</p>";
    }
  }

  function keyUpPassConfirm() {
    if ($passConfirm.get()[0].value.length < 8) {
      $passConfirm.get()[0].classList.remove("acert-pass");
      $passConfirm.get()[0].classList.add("error-pass");
    } else {
      $passConfirm.get()[0].classList.remove("error-pass");
      $passConfirm.get()[0].classList.add("acert-pass");
    }
  }

  function keyUpPass() {
    if ($pass.get()[0].value.length < 8) {
      $pass.get()[0].classList.remove("acert-pass");
      $pass.get()[0].classList.add("error-pass");
    } else {
      $pass.get()[0].classList.remove("error-pass");
      $pass.get()[0].classList.add("acert-pass");
    }
  }

  function keyUpEmail() {
    if ($emailCadastro.get()[0].value.length <= 10) {
      $emailCadastro.get()[0].classList.remove("acert-email"); // de principio explique que não pode colocar anderline e nem hifen, depois refatore e corrija para poder
      $emailCadastro.get()[0].classList.add("error-email");
    } else {
      $emailCadastro.get()[0].classList.remove("error-email");
      $emailCadastro.get()[0].classList.add("acert-email");
    }
  }

  function keyUpName() {
    if ($nameCadastro.get()[0].value.length < 3) {
      $nameCadastro.get()[0].classList.remove("acert-email");

      $nameCadastro.get()[0].classList.add("error-email");
    } else {
      $nameCadastro.get()[0].classList.remove("error-email");
      $nameCadastro.get()[0].classList.add("acert-email");
    }
  }

  function handleClickImgPass() {
    if ($imgPass.get()[0].classList.contains("senha-cadastro_off")) {
      $imgPass.get()[0].setAttribute("src", "/aula-28/img/visibility.svg");
      $imgPass.get()[0].classList.remove("senha-cadastro_off");
      $imgPass.get()[0].classList.add("senha-cadastro");
      $pass.get()[0].type = "text";
    } else {
      $imgPass.get()[0].setAttribute("src", "/aula-28/img/visibility_off.svg");
      $imgPass.get()[0].classList.remove("senha-cadastro");
      $imgPass.get()[0].classList.add("senha-cadastro_off");
      $pass.get()[0].type = "password";
    }
  }

  function handleClickImgPassConfirm() {
    if ($imgPassConfirm.get()[0].classList.contains("confirme-senha_off")) {
      $imgPassConfirm
        .get()[0]
        .setAttribute("src", "/aula-28/img/visibility.svg");
      $imgPassConfirm.get()[0].classList.remove("confirme-senha_off");
      $imgPassConfirm.get()[0].classList.add("confirme-senha");
      $passConfirm.get()[0].type = "text";
    } else {
      $imgPassConfirm
        .get()[0]
        .setAttribute("src", "/aula-28/img/visibility_off.svg");
      $imgPassConfirm.get()[0].classList.remove("confirme-senha");
      $imgPassConfirm.get()[0].classList.add("confirme-senha_off");
      $passConfirm.get()[0].type = "password";
    }
  }

  function handleClickCadastro(e) {
    e.preventDefault();
    $emailCadastro.forEach((item) => {
      isValidEmail(item);
    });

    $pass.forEach((item) => {
      isValidPass(item);
    });

    $nameCadastro.forEach((item) => isNameValid(item));

    cadastroCompleto();
  }

  function isValidEmail(item) {
    let match1 = item.value.match(
      /^\-?\w+?\.?\w+[\.|\_|\+|]?\w+?[^\_|^\.^\+^\-]\@\w+\.\w\w+(\.\w\w)?/gim
    );
    if (match1 === null) {
      isEmailValid = false;
    } else {
      isEmailValid = true;
    }
  }

  function isValidPass(item) {
    $passConfirm.forEach((item2) => {
      isMatchPass(item.value);
      isMatchPassConfirm(item2.value);
      if (
        item.value === item2.value &&
        isPassConfirm === true &&
        isPassValid === true
      ) {
        passValid = true;
      } else {
        passValid = false;
      }
    });
  }

  function isMatchPassConfirm(item) {
    var passMatch = item.match(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    );
    if (passMatch === null) {
      isPassConfirm = false;
    } else {
      isPassConfirm = true;
    }
  }

  function isMatchPass(item) {
    var passMatch = item.match(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    );
    if (passMatch === null) {
      isPassValid = false;
    } else {
      isPassValid = true;
    }
  }

  function isNameValid(item) {
    if (item.value.length < 3 || item.value === "") {
      nameValid = false;
    } else {
      nameValid = true;
    }
  }

  function cadastroCompleto() {
    $passConfirm.get()[0].classList.remove("acert-pass");
    $pass.get()[0].classList.remove("acert-pass");
    $emailCadastro.get()[0].classList.remove("acert-email");
    $nameCadastro.get()[0].classList.remove("acert-email");
    if (isEmailValid === true && passValid === true && nameValid === true) {
      let listUser = JSON.parse(localStorage.getItem("listUser")) || [];

      listUser.push({
        userForm: $nameCadastro.get()[0].value,
        emailForm: $emailCadastro.get()[0].value,
        passForm: $pass.get()[0].value,
      });

      localStorage.setItem("listUser", JSON.stringify(listUser));

      $respostaCadastro.forEach((item) => {
        item.classList.toggle("none");
        item.classList.toggle("mensage-acert");
        item.innerText = "Email Cadastrado com sucesso!";
        setTimeout(function () {
          item.classList.toggle("none");
          item.classList.toggle("mensage-acert");
          item.innerText = "";
          $formLogin.forEach((item2) => item2.classList.toggle("none"));
          $formCadastro.forEach((item3) => item3.classList.toggle("none"));
        }, 3000);
      });
    } else if (
      isEmailValid === true &&
      passValid === false &&
      nameValid === true
    ) {

      $emailCadastro.get()[0].classList.add("acert-email");
      $nameCadastro.get()[0].classList.add("acert-email");
      $pass.get()[0].classList.remove("acert-pass");
      $pass.get()[0].classList.add("error-pass");
      $passConfirm.get()[0].classList.remove("acert-pass");
      $passConfirm.get()[0].classList.add("error-pass");

      $respostaCadastro.forEach((item) => {
        item.classList.toggle("none");
        item.classList.toggle("mensage-error");
        item.innerText =
          "Senha inválida, clique no balãozinho para mais instruções";
        setTimeout(function () {
          item.classList.toggle("none");
          item.classList.toggle("mensage-error");
          item.innerText = "";
        }, 5000);
      });
    } else if (
      isEmailValid === true &&
      passValid === false &&
      nameValid === false
    ) {
      
      $emailCadastro.get()[0].classList.add("acert-email");


      $nameCadastro.get()[0].classList.remove("acert-email");
      $nameCadastro.get()[0].classList.add("error-email");
      $pass.get()[0].classList.remove("acert-pass");
      $pass.get()[0].classList.add("error-pass");
      $passConfirm.get()[0].classList.remove("acert-pass");
      $passConfirm.get()[0].classList.add("error-pass");

      $respostaCadastro.forEach((item) => {
        item.classList.toggle("none");
        item.classList.toggle("mensage-error");
        item.innerText =
          "Senha e nome inválidos, clique no balãozinho para mais instruções";
        setTimeout(function () {
          item.classList.toggle("none");
          item.classList.toggle("mensage-error");
          item.innerText = "";
        }, 5000);
      });
    } else if (
      isEmailValid === true &&
      passValid === true &&
      nameValid === false
    ) {
      $passConfirm.get()[0].classList.add("acert-pass");
      $pass.get()[0].classList.add("acert-pass");
      $emailCadastro.get()[0].classList.add("acert-email");


      $nameCadastro.get()[0].classList.remove("acert-email");
      $nameCadastro.get()[0].classList.add("error-email");

      $respostaCadastro.forEach((item) => {
        item.classList.toggle("none");
        item.classList.toggle("mensage-error");
        item.innerText =
          "nome inválido, clique no balãozinho para mais instruções";
        setTimeout(function () {
          item.classList.toggle("none");
          item.classList.toggle("mensage-error");
          item.innerText = "";
        }, 5000);
      });
    } else if (
      isEmailValid === false &&
      passValid === true &&
      nameValid === true
    ) {
      $passConfirm.get()[0].classList.add("acert-pass");
      $pass.get()[0].classList.add("acert-pass");
      $nameCadastro.get()[0].classList.add("acert-email");

      $emailCadastro.get()[0].classList.remove("acert-email");
      $emailCadastro.get()[0].classList.add("error-email");

      $respostaCadastro.forEach((item) => {
        item.classList.toggle("none");
        item.classList.toggle("mensage-error");
        item.innerText =
          "Email inválido, clique no balãozinho para mais instruções";
        setTimeout(function () {
          item.classList.toggle("none");
          item.classList.toggle("mensage-error");
          item.innerText = "";
        }, 5000);
      });
    } else if (
      isEmailValid === false &&
      passValid === true &&
      nameValid === false
    ) {
      $passConfirm.get()[0].classList.add("acert-pass");
      $pass.get()[0].classList.add("acert-pass");
      
      $emailCadastro.get()[0].classList.remove("acert-email");
      $emailCadastro.get()[0].classList.add("error-email");
      $nameCadastro.get()[0].classList.remove("acert-email");
      $nameCadastro.get()[0].classList.add("error-email");

      $respostaCadastro.forEach((item) => {
        item.classList.toggle("none");
        item.classList.toggle("mensage-error");
        item.innerText =
          "Email e nome inválido, clique no balãozinho para mais instruções";
        setTimeout(function () {
          item.classList.toggle("none");
          item.classList.toggle("mensage-error");
          item.innerText = "";
        }, 5000);
      });
    } else if (
      isEmailValid === false &&
      passValid === false &&
      nameValid === true
    ) {
      $nameCadastro.get()[0].classList.add('acert-email')

      $emailCadastro.get()[0].classList.remove("acert-email");
      $emailCadastro.get()[0].classList.add("error-email");
      $pass.get()[0].classList.remove("acert-pass");
      $pass.get()[0].classList.add("error-pass");
      $passConfirm.get()[0].classList.remove("acert-pass");
      $passConfirm.get()[0].classList.add("error-pass");

      $respostaCadastro.forEach((item) => {
        item.classList.toggle("none");
        item.classList.toggle("mensage-error");
        item.innerText =
          "Email e senha inválido, clique no balãozinho para mais instruções";
        setTimeout(function () {
          item.classList.toggle("none");
          item.classList.toggle("mensage-error");
          item.innerText = "";
        }, 5000);
      });
    } else {
      $pass.get()[0].classList.remove("acert-pass");
      $pass.get()[0].classList.add("error-pass");
      $emailCadastro.get()[0].classList.remove("acert-email");
      $emailCadastro.get()[0].classList.add("error-email");
      $nameCadastro.get()[0].classList.remove("acert-email");
      $nameCadastro.get()[0].classList.add("error-email");
      $nameCadastro.get()[0].classList.remove("acert-email");
      $nameCadastro.get()[0].classList.add("error-email");
      $passConfirm.get()[0].classList.remove("acert-pass");
      $passConfirm.get()[0].classList.add("error-pass");

      $respostaCadastro.forEach((item) => {
        item.classList.toggle("none");
        item.classList.toggle("mensage-error");
        item.innerText =
          "Tudo está inválido, clique no balãozinho para mais instruções";
        setTimeout(function () {
          item.classList.toggle("none");
          item.classList.toggle("mensage-error");
          item.innerText = ""; // devo colocar o olho da senha, border
        }, 5000);
      });
    }
  }
})(window, document, window.DOM);
