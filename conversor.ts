type entrada = {
    valor:number;
    unidade: 'centimetro' | 'metro'
}


function conversor({valor,unidade}:entrada){
    if(unidade === 'centimetro'){
        return valor /100;
    } else {
        return valor * 100 
    }

}

const a = conversor({valor:100, unidade: 'centimetro'});
console.log(a)