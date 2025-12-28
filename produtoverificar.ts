interface produto{
    id:number;
    estoque:number,
    descricao:string
}

const verificarestoque = (produtos:produto[]) => {
    let estoqueabaixo: produto[] = [];

    for (let i = 0; i< produtos.length; i++){
        if (produtos[i].estoque < 10)
            estoqueabaixo.push(produtos[i]) 
    }

    return estoqueabaixo;
}