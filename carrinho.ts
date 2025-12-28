type carrinho = {
    preco:number,
    quantidade:number,
    descricao:string

}

const listacompras: carrinho[] = [
]

const caluclartotal = (itens:carrinho[]):string => {
    let valortotal:number = 0;
    for (let i:number=0; i < itens.length;i++) {

        valortotal += itens[i].quantidade*itens[i].preco;
    }

    return 'O valor total das compras é ${valortotal}'
}

console.log(caluclartotal(listacompras))