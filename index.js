const { Operacoes } = require('./operacoes')
const calculadora = new Operacoes();
const inquirer = require('inquirer')

inquirer.prompt([
    {
        name: 'n1',
        message: 'Digite o primeiro número:'
    },
    {
        name: 'n2',
        message: 'Digite o segundo número:'
    },
    {
        name: 'operacao',
        message: 'Escolha uma operação:\n  Digite 1 para adição\n  Digite 2 para subtração\n  Digite 3 para multiplicação\n  Digite 4 para divisão'
    }
]).then((respostas) => {
    let operacao = parseInt(respostas.operacao)
    let n1 = parseFloat(respostas.n1)
    let n2 = parseFloat(respostas.n2)

    switch (operacao) {
        case 1:
            console.log (`${n1} + ${n2} = ${calculadora.adicao(n1, n2)}`)
            break;
        case 2:
            console.log (`${n1} - ${n2} = ${calculadora.subtracao(n1, n2)}`)
            break;
        case 3:
            console.log (`${n1} x ${n2} = ${calculadora.multiplicacao(n1, n2)}`)
            break;
        case 4:
            console.log (`${n1} / ${n2} = ${calculadora.divisao(n1, n2)}`)
            break;
        default:
            console.log ("  Você não digitou um número listado para as operações!");
            break;
    }
}).catch((err) => console.log(err))


