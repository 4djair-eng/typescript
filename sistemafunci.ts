interface user {
    cargo:string,
    nome:string,
    salario:number
}

const mensagem = (funcionario: user):string => {
    return 'O funcionario ${funcionario.nome} possui o salario de ${user.salario}.' ;

}