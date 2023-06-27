let livros = []
const endpoint = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
const elementoBotao = document.querySelectorAll(".btn");


elementoBotao.forEach(e => {
   e.addEventListener("click",e => filtrarLivros(e))
})

console.log(elementoBotao)
async function getBuscarLivrosDaAPI() {
    const response = await fetch(endpoint)
    livros = await response.json();
    let livrosComDesconto = aplicarDesconto(livros);
    montarTelaLivros(livrosComDesconto);
}


getBuscarLivrosDaAPI();

