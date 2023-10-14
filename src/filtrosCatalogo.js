const catalogoProdutos = document.getElementById("container-produto");
function exibirTodos() {
  const produtosEscondidos = Array.from(
    catalogoProdutos.getElementsByClassName("hidden")
  );

  for (const produto of produtosEscondidos) {
    produto.classList.remove("hidden");
  }
}

function esconderAcompanhamento() {
  exibirTodos();
  const produtosAcompanhamento = Array.from(
    catalogoProdutos.getElementsByClassName("acompanhamento")
  );

  for (const produto of produtosAcompanhamento) {
    produto.classList.add("hidden");
  }
}

function esconderBebida() {
  exibirTodos();
  const produtosBebida = Array.from(
    catalogoProdutos.getElementsByClassName("bebida")
  );

  for (const produto of produtosBebida) {
    produto.classList.add("hidden");
  }
}

export function inicializarFiltros() {
  document
    .getElementById("exibir-todos")
    .addEventListener("click", exibirTodos);
  document
    .getElementById("exibir-acompanhamento")
    .addEventListener("click", esconderBebida);
  document
    .getElementById("exibir-bebida")
    .addEventListener("click", esconderAcompanhamento);
}
