var livrosFiltrados =[];
var valorLivrosDisponiveis =0;
function exibirValorTotalDosLivros() {
    elementoComValorTotalDeLivros.innerHTML = `
        <div class="livros__disponiveis">
          <p>Todos os livros disponíveis por R$ <span id="valor">${valorLivrosDisponiveis.toFixed(2)}</span></p>
        </div>
    `;
}

function filtrarLivros(elemento) {

    const filtro = elemento.target.value
    if(filtro !== '') {
        livrosFiltrados = livros.filter(livro => livro.categoria === filtro);
        let livrosComDesconto = aplicarDesconto(livrosFiltrados);
    }
    if(elemento.target.classList.contains("btn-disponiveis")) if (livrosFiltrados.length > 0) {
        livrosDisponiveis = livrosFiltrados.filter(livro => livro.quantidade > 0);
        let livrosComDesconto = aplicarDesconto(livrosDisponiveis);
        valorLivrosDisponiveis = livrosComDesconto.reduce((soma, e) => soma + Number(e.preco),0);
    } else {
        livrosDisponiveis = livros.filter(livro => livro.quantidade > 0);
        let livrosComDesconto = aplicarDesconto(livrosDisponiveis);
        valorLivrosDisponiveis = livrosComDesconto.reduce((soma, e) => soma + Number(e.preco),0);
    }
    if(elemento.target.classList.contains("btn-ordenacao")){
        if(livrosFiltrados.length > 0){
            const livrosOrdenados = ordenarLivros(livrosFiltrados);
            let livrosComDesconto = aplicarDesconto(livrosOrdenados);
        }else{
            const livrosOrdenados = ordenarLivros(livros);
            let livrosComDesconto = aplicarDesconto(livrosOrdenados);
        }
    }

    elementoPrateleira.innerHTML = ``;
    montarTelaLivros(livrosComDesconto)
    if(elemento.target.classList.contains("btn-disponiveis")){
        exibirValorTotalDosLivros();
    }
}
