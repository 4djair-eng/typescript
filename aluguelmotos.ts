type motos = {
    modelo:string,
    valor:number
}

interface aluguel extends motos {
    cliente:string,
    dias:number
}

const getPreço = (valor:aluguel["valor"], dias:aluguel["dias"]): void  => {
let valortotal:number = valor + dias;
console.log("O valor total", valortotal)
}