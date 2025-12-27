const lista = [1,4,5];

function analise() {
    const tamanhodalista = lista.length;
    const first = lista[0]; 


    if(lista.length === 0){
        return 'lista está vazia';
    } else {
        return {first, tamanhodalista};

    }
}

const resultado = analise();
console.log(resultado); 