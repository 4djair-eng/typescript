interface obradeArte {
    titulo:string,
    artista:string,
    ano:number,
    lance:number,
    vendida:boolean
}


const obravendida = (obra:obradeArte,valorpago:number) => {
    if(valorpago >= obra.lance){
        obra.vendida = true

    }

    const vanGogh:obradeArte = {
        ano:1600,
        artista:"Van Gogh",
        lance:15000,
        titulo:"Girassois",
        vendida:false
    }

    console.log(obravendida(vanGogh, 50000));
    console.log(vanGogh)
}