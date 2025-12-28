interface Cervejaartesanal {
    nome:string,
    porcentagem:number,
    estilo:string,
    IBU:number
}

const cervejastipos: Cervejaartesanal[]=[

        {nome:"Itaipava",estilo:"Americana",IBU:23,porcentagem:45},
        {nome:"Skol",estilo:"Americana",IBU:18,porcentagem:4},
        {nome:"Heineken",estilo:"Alemã",IBU:23,porcentagem:6},
        {nome:"Bhrama",estilo:"Espanhola",IBU:23,porcentagem:4}
]

const filtrarcervejas = (cervejas:Cervejaartesanal[]):Cervejaartesanal[] => {
    let cervejasmaiores = cervejas.filter((cervejas)=> cervejas.porcentagem>5);
    return cervejasmaiores;
}

console.log(cervejastipos)
