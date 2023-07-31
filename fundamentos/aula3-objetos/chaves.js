const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["11555555555", "11444444444"]

}

cliente.enderecos = {
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "AP 934"
}

const chavesDoObjeto = Object.keys(cliente)

console.log(chavesDoObjeto)

if (!chavesDoObjeto.includes('enderecos')) {
    console.error("Erro: Endereço não incluso")
}