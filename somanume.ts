type result ={
    soma:number;
    maior:number;
    menor: number
}

const lista = [1,2,34,54,12,11,15,10];

function percorrer(lista: number[]): result {

    if (lista.length === 0){
        console.log('Lista vazia');
        }

    let soma = 0;
    let maior = 0;
    let menor = 0;
    
    for(let i=0;i<lista.length;i++){
        soma = soma + lista[i];
    

    if(lista[i]> maior){
        maior = lista[i];
    } 
    
    if (menor < lista[i]){
        menor = lista[i];
    }}

    return{
        soma, 
        maior, 
        menor
    }
 }