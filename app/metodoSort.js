function comparaPreco(a,b) {
    return a.preco - b.preco;
}

function ordenarLivros(livros){
    return livros.sort(comparaPreco)
}
