// Definição das variáveis para o carregamento da tabela:
let acao = document.querySelectorAll(".acao");

let horario = document.querySelectorAll(".horario");

let aula = `<td class="aula" contenteditable="true" spellcheck="false">
              <p class="disciplina">Disciplina</p>
              <p class="professor">Professor</p>
              <p class="sala">Sala</p>
            </td>`;

// Carregando conteúdo da tabela:
for (let l = 0; l < 17; l++) {
  for (let c = 0; c < 5; c++) {
    if (c == 0) {
      acao[l].insertAdjacentHTML(
        "beforeend",
        `
        <button class="acao-limpar" onclick="limparLinha(${l})">
          <i class="fa-solid fa-eraser"></i> Limpar linha
        </button>
        <button class="acao-reiniciar" onclick="reiniciarLinha(${l})">
          <i class="fa-solid fa-rotate"></i> Reiniciar linha
        </button>
        <button class="acao-remover" onclick="removerLinha(${l})">
          <i class="fa-solid fa-trash-can"></i> Remover linha
        </button>`
      );
    }
    horario[l].insertAdjacentHTML("afterend", aula);
  }
}
// Fim do carregamento.

// Definição da variável para manipular as linhas da tabela:
let linha = document.querySelectorAll(".linha");

// Função (ação) de limpar linha:
function limparLinha(n) {
  let aula = linha[n].querySelectorAll(".aula");
  for (let i = 0; i < 5; i++) {
    aula[i].innerHTML = "";
  }
}

// Definição variável contendo conteúdo das aulas:
let aulaPadrao = `
<p class="disciplina">Disciplina</p>
<p class="professor">Professor</p>
<p class="sala">Sala</p>
`;

// Função (ação) de reiniciar linha:
function reiniciarLinha(n) {
  limparLinha(n);
  let aula = linha[n].querySelectorAll(".aula");
  for (let i = 0; i < 5; i++) {
    aula[i].insertAdjacentHTML("beforeend", aulaPadrao);
  }
}

// Definição das variáveis contendo conteúdo do botão "remover linha":
let removerLinhaHTML = '<i class="fa-solid fa-trash-can"></i> Remover linha';

let adicionarLinhaHTML = '<i class="fa-solid fa-plus"></i> Incluir linha';

// Função (ação) de remover linha:
function removerLinha(n) {
  let botaoRemover = acao[n].querySelector(".acao-remover");
  if (linha[n].classList.contains("removida")) {
    linha[n].classList.remove("removida");
    botaoRemover.style.color = "#ff0000";
    botaoRemover.innerHTML = removerLinhaHTML;
  } else {
    linha[n].classList.add("removida");
    botaoRemover.style.color = "#00b000";
    botaoRemover.innerHTML = adicionarLinhaHTML;
  }
}
