(function (win, doc, DOM) {
  "use strict";

  const $inputLogin = new DOM('[data-js="email-login"]');
  const $passLogin = new DOM('[data-js="pass-login"]');
  const $btnLogin = new DOM('[data-js="btn-login"]');
  const $responseLogin = new DOM('[data-js="resposta-cadastro"]');
  const $imgPass = new DOM('[data-js="img-pass-login"]');
  var lista = localStorage.getItem("listUser");
  var jsonLista = JSON.parse(lista);


  $btnLogin.on("click", validacaoDoCadastramentoLogin);
  $imgPass.on("click", handleClickImgPass);
  $passLogin.on('keyup', keyupPassLogin)
  $inputLogin.on('keyup', keyupPassLogin)

  function keyupPassLogin() {
    $inputLogin.get()[0].classList.remove('error-email')
    $passLogin.get()[0].classList.remove('error-pass')
  }

  function validacaoDoCadastramentoLogin(e) {
    e.preventDefault();
    jsonLista.forEach((item, index, array) => {
      if(array[index].emailForm === $inputLogin.get()[0].value) {

      if (
        item.emailForm === $inputLogin.get()[0].value &&
        item.passForm === $passLogin.get()[0].value
      ) {
        window.location.href = "/aula-28/html/cadastro_veiculo/cadastro.html";
      } 
    }else {
      $inputLogin.get()[0].classList.add('error-email')
       $passLogin.get()[0].classList.add("error-pass");


    $responseLogin.forEach((item) => {
      item.classList.remove("none");
      item.classList.add("mensage-error");
      item.innerText =
        "Email ou Senha inválidos";
      setTimeout(function () {
        item.classList.add("none");
        item.classList.remove("mensage-error");
        item.innerText = "";
      }, 5000);
    });
  }

    });
  
  }

  function handleClickImgPass() {
    if ($imgPass.get()[0].classList.contains("senha-login_off")) {
      $imgPass.get()[0].setAttribute("src", "/aula-28/img/visibility.svg");
      $imgPass.get()[0].classList.remove("senha-login_off");
      $imgPass.get()[0].classList.add("senha-login");
      $passLogin.get()[0].type = "text";
    } else {
      $imgPass.get()[0].setAttribute("src", "/aula-28/img/visibility_off.svg");
      $imgPass.get()[0].classList.remove("senha-login");
      $imgPass.get()[0].classList.add("senha-login_off");
      $passLogin.get()[0].type = "password";
    }
  }
})(window, document, window.DOM);
