
interface pizza {
    sabor:string,
    tamanho:"media" | "grande" | "gigante",
    preco:number
}

const sabores: pizza[] = [
    {sabor: "Calabresa", tamanho: "media", preco: 59.9},
    {sabor: "Calabresa", tamanho: "grande", preco: 89.9},
    {sabor: "Calabresa", tamanho: "gigante", preco: 99.9}
]