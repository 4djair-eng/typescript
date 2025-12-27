type parametros = {
comprimentoP:number;
alturaP:number;
comprimentoA:number;
alturaA:number;

};


function calculo1({comprimentoA,comprimentoP,alturaA,alturaP}:parametros){
    const comprimetoparede = comprimentoP;
    const alturaparede = alturaP;
    //dado que os azulejos estão em unidades diferentes, temos a conversão
    const comprimentoAzulejo = comprimentoA/100;
    const alturaazulejo = 15/100;

    const areaparede = comprimentoP*alturaP;
    const areaazulejo = comprimentoA*alturaA;
    const quantidade = areaparede/areaazulejo;
    console.log(areaparede, areaazulejo, quantidade);

}

calculo1({comprimentoA:3,alturaA:8,alturaP:8,comprimentoP:9});   