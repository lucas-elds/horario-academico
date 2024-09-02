let linha = document.querySelectorAll(".linha");
let botaoRemover = document.querySelectorAll(".acao-remover");

let disciplinaHTML = '<p class="disciplina">Disciplina</p>';
let professorHTML = '<p class="professor">Professor</p>';
let salaHTML = '<p class="sala">Sala</p>';

let removerLinhaHTML = '<i class="fa-solid fa-trash-can"></i> Remover linha';
let adicionarLinhaHTML = '<i class="fa-solid fa-plus"></i> Adicionar linha';

function limparLinha(n) {
  let aula = linha[n].querySelectorAll(".aula");
  for (let i in aula) {
    aula[i].innerHTML = "";
  }
}

function reiniciarLinha(n) {
  limparLinha(n);
  let aula = linha[n].querySelectorAll(".aula");
  for (let i = 0; i < 5; i++) {
    aula[i].insertAdjacentHTML("beforeend", disciplinaHTML);
    aula[i].insertAdjacentHTML("beforeend", professorHTML);
    aula[i].insertAdjacentHTML("beforeend", salaHTML);
  }
}

function removerLinha(n) {
  if (linha[n].classList.contains("removida")) {
    linha[n].classList.remove("removida");
    botaoRemover[n].style.color = "#ff0000";
    botaoRemover[n].innerHTML = removerLinhaHTML;
  } else {
    linha[n].classList.add("removida");
    botaoRemover[n].style.color = "#00b000";
    botaoRemover[n].innerHTML = adicionarLinhaHTML;
  }
}
