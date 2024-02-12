(function (DOM, doc) {
  "use strict";

  /**
     * 
    Vamos estruturar um pequeno app utilizando módulos.
    Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
    A primeira etapa vai ser o cadastro de veículos, que deverá funcionar da
    seguinte forma:
    - No início do arquivo, deverá ter as informações da sua empresa - nome e
    telefone (já vamos ver como isso vai ser feito)
    - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
    um formulário para cadastro do carro, com os seguintes campos:
      - Imagem do carro (deverá aceitar uma URL)
      - Marca / Modelo
      - Ano
      - Placa
      - Cor
      - e um botão "Cadastrar"
  
    Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
    carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
    aparecer no final da tabela.
  
    Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
    empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
    Dê um nome para a empresa e um telefone fictício, preechendo essas informações
    no arquivo company.json que já está criado.
  
    Essas informações devem ser adicionadas no HTML via Ajax.
  
    Parte técnica:
    Separe o nosso módulo de DOM criado nas últimas aulas em
    um arquivo DOM.js.
  
    E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
    que será nomeado de "app".
    */
  var app = (function () {
    return {
      init: function init() {
        this.getInfoAjax();
        this.initEvents();
        this.clickBtnExcluir();
      },

      initEvents() {
        const btnCadastrar = new DOM('[data-js="btn-cadastrar"]').on(
          "click",
          (e) => {
            this.handleClickButtonCadastrar(e);
            this.clickBtnExcluir();
          }
        );
      },

      clickBtnExcluir: function clickBtnExcluir() {
        const btnExcluir = new DOM('[data-js="btn-excluir"]');
        const $divInformacoes = new DOM('[data-js="card-car"]');

        btnExcluir.forEach((item, index, array) => {
          item.addEventListener("click", function () {
            const $placa = new DOM('[data-js="placa"]');
            $divInformacoes
              .get()
              [index].parentNode.removeChild($divInformacoes.get()[index]);
            var deleteAjax = new XMLHttpRequest();

            deleteAjax.open("DELETE", `http://localhost:3000/car`);

            deleteAjax.setRequestHeader(
              "Content-Type",
              "application/x-www-form-urlencoded"
            );

            deleteAjax.send(`plate=${$placa.get()[index].innerText}`);

            deleteAjax.onreadystatechange = function () {
              console.log(deleteAjax.readyState);
              if (deleteAjax.readyState === 4) {
                console.log("excuido com sucesso");
              }
            };
          });
        });
      },

      handleClickButtonCadastrar: function handleClickButtonCadastrar(e) {
        e.preventDefault();
        const $divCar = new DOM('[data-js="carros"]').get()[0];
        $divCar.appendChild(this.createHtmlTags());

        const $imgInput = new DOM('[data-js="img-input"]');
        const $marcaInput = new DOM('[data-js="marca-input"]');
        const $anoInput = new DOM('[data-js="ano-input"]');
        const $placaInput = new DOM('[data-js="placa-input"]');
        const $corInput = new DOM('[data-js="cor-input"]');

        var ajax = new XMLHttpRequest();
        ajax.open("POST", "http://localhost:3000/car");
        ajax.setRequestHeader(
          "Content-Type",
          "application/x-www-form-urlencoded"
        );
        ajax.send(
          `image=${$imgInput.get()[0].value}&brandModel=${
            $marcaInput.get()[0].value
          }&year=${$anoInput.get()[0].value}&plate=${
            $placaInput.get()[0].value
          }&color=${$corInput.get()[0].value}`
        );

        console.log("Cadastrando o usuário....");
        ajax.onreadystatechange = function () {
          if (ajax.readyState === 4) {
            console.log("Usuário cadastrado...");
          }
        };

        var get = new XMLHttpRequest();
        get.open("GET", "http://localhost:3000/car");
        get.send();
        get.onreadystatechange = function () {
          if (get.readyState === 4) {
            console.log(get.responseText);
          }
        };

        $imgInput.get()[0].value = "";
        $marcaInput.get()[0].value = "";
        $anoInput.get()[0].value = "";
        $placaInput.get()[0].value = "";
        $corInput.get()[0].value = "";
      },

      getInfoAjax: function getInfoAjax() {
        const $nameEmpresa = new DOM('[data-js="empresa"]');
        const $contatoEmpresa = new DOM('[data-js="contato"]');

        const ajax = new XMLHttpRequest();
        ajax.open("GET", "/data/company.json");
        ajax.send(null);
        ajax.addEventListener("readystatechange", function () {
          if (isRequestOk(ajax)) {
            $nameEmpresa.get()[0].innerText = JSON.parse(
              ajax.responseText
            ).name;
            $contatoEmpresa.get()[0].innerText = JSON.parse(
              ajax.response
            ).phone;
            $contatoEmpresa.get()[1].innerText = JSON.parse(
              ajax.responseText
            ).phone;
            $nameEmpresa.get()[1].innerText = JSON.parse(
              ajax.responseText
            ).name;
            $nameEmpresa.get()[2].innerText = JSON.parse(
              ajax.responseText
            ).name;
          }
        });

        function isRequestOk(ajax) {
          return ajax.readyState === 4 && ajax.status === 200;
        }
      },

      createHtmlTags: function createHtmlTags() {
        const $fragment = doc.createDocumentFragment();
        const $div = doc.createElement("div");
        const $childDiv = doc.createElement("div");
        const $childDiv2 = doc.createElement("div");
        const $image = doc.createElement("img");
        const $pPlaca = doc.createElement("p");
        const $spanPlaca = doc.createElement("span");
        const $pMarca = doc.createElement("p");
        const $spanMarca = doc.createElement("span");
        const $pAno = doc.createElement("p");
        const $spanAno = doc.createElement("span");
        const $pCor = doc.createElement("p");
        const $spanCor = doc.createElement("span");
        const $btnEdit = doc.createElement("a");
        const $btnExcluir = doc.createElement("a");

        $spanAno.classList.add("resp-infor");
        $spanCor.classList.add("resp-infor");
        $spanMarca.classList.add("resp-infor");
        $spanPlaca.classList.add("resp-infor");
        $spanPlaca.setAttribute("data-js", "placa");

        const $imgInput = new DOM('[data-js="img-input"]');
        const $marcaInput = new DOM('[data-js="marca-input"]');
        const $anoInput = new DOM('[data-js="ano-input"]');
        const $placaInput = new DOM('[data-js="placa-input"]');
        const $corInput = new DOM('[data-js="cor-input"]');

        $div.classList.add("card-car");
        $div.setAttribute("data-js", "card-car");
        $div.appendChild($childDiv);

        $childDiv.appendChild($image);
        $image.classList.add("card");
        $image.setAttribute("src", $imgInput.get()[0].value);

        $childDiv.appendChild($childDiv2);
        $childDiv2.classList.add("informacoes");

        $childDiv2.appendChild($pMarca);
        $pMarca.classList.add("key-info");
        $pMarca.textContent = "Marca: ";
        $pMarca.appendChild($spanMarca);
        $spanMarca.textContent = $marcaInput.get()[0].value;

        $childDiv2.appendChild($pAno);
        $pAno.classList.add("key-info");
        $pAno.textContent = "Ano: ";
        $pAno.appendChild($spanAno);
        $spanAno.textContent = $anoInput.get()[0].value;

        $childDiv2.appendChild($pPlaca);
        $pPlaca.classList.add("key-info");
        $pPlaca.textContent = "Placa: ";
        $pPlaca.appendChild($spanPlaca);
        $spanPlaca.textContent = $placaInput.get()[0].value;

        $childDiv2.appendChild($pCor);
        $pCor.classList.add("key-info");
        $pCor.textContent = "Cor: ";
        $pCor.appendChild($spanCor);
        $spanCor.textContent = $corInput.get()[0].value;

        $childDiv2.appendChild($btnEdit);
        $btnEdit.classList.add("editar-card");
        $btnEdit.textContent = "Editar";

        $childDiv2.appendChild($btnExcluir);
        $btnExcluir.setAttribute("data-js", "btn-excluir");
        $btnExcluir.classList.add("excluir-card");
        $btnExcluir.textContent = "Excluir";

        return $fragment.appendChild($div);
      },
    };
  })();

  app.init();
})(window.DOM, document);
