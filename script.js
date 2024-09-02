let linha = document.querySelectorAll(".linha");
let botaoRemover = document.querySelectorAll(".acao-remover");

let removerLinhaHTML = '<i class="fa-solid fa-trash-can"></i> Remover linha';
let adicionarLinhaHTML = '<i class="fa-solid fa-plus"></i> Adicionar linha';

function removerLinha(n) {
  if (linha[n].classList.contains("removida")) {
    linha[n].classList.remove("removida");
    botaoRemover[n].style.color = "#ff0000";
    botaoRemover[n].innerHTML = removerLinhaHTML;
  } else {
    linha[n].classList.add("removida");
    botaoRemover[n].style.color = "#34825f";
    botaoRemover[n].innerHTML = adicionarLinhaHTML;
  }
}

// let disciplina = '<p class="disciplina">Disciplina</p>';
// let professor = '<p class="professor">Professor</p>';
// let sala = '<p class="sala">Sala</p>';
