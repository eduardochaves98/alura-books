const elementoPrateleira = document.getElementById("livros");
const elementoComValorTotalDeLivros = document.getElementById("valor_total_livros_disponiveis");
function montarTelaLivros(livros) {
    elementoComValorTotalDeLivros.innerHTML = "";
    livros.forEach(e => {
        let disponibilidade = e.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'
        let novoLivro = `    <div class="livro">
          <img class="${disponibilidade}" src="${e.imagem}" alt="${e.alt}" />
          <h2 class="livro__titulo">
            ${e.titulo}
          </h2>
          <p class="livro__descricao">${e.autor}</p>
          <p class="livro__preco" id="preco">R$${e.preco.toFixed(2)}</p>
          <div class="tags">
            <span class="tag">${e.categoria}</span>
           </div>
        </div>`;
        elementoPrateleira.innerHTML += novoLivro;

    })
}