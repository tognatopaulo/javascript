import fs from "fs";
import chalk from "chalk";

function trataErro(erro) {
    console.log(erro)
    throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'));
}

// async / await
async function pegaArquivo(caminhoDoArquivo){
    try{
        const encoding = 'utf-8'
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        console.log(chalk.green(texto))

    } catch(erro) {
        trataErro(erro)
    }
}

pegaArquivo('2708-node-lib-md/arquivos/texto.md')
pegaArquivo('2708-node-lib-md/arquivos/')




