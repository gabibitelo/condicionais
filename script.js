//exercicio-1)

//condicional2 recebendo = false
//condicional1 recebendo = true

//let condicional1 = true;

//if(condicional1) {
  //  console.log('Entramos na condicao')
//}

//let condicional1 = false;
//let condicional2 = true;

//if(condicional1 && condicional2) { 
  //  console.log('Entramos na condicao')
//}

// exercico-2
//let n1 = prompt('informe outro numero');
//let n2 = prompt('informe um numero');
//function comparar (n1,n2){
  //  let resultado = "numeros diferentes";
  //  if (n1===n2){
  //      resultado = "numeros sao iguais";
  //  } 
//return resultado
//}
//console.log(comparar(n1,n2))
  

//exercicio-3)
//let n1 = prompt('informe outro numero');
//let n2 = prompt('informe um numero');
//function comparar (n1,n2){
//    let resultado = "numeros diferentes";
//    if (n1===n2){
//        resultado = "numeros sao iguais";
//    } else
//return resultado
//}
//console.log(comparar(n1,n2))
 
//exercicio-4)

//function compararNumeros(num1,num2) {
    //let res = '';
    //if(num1 > num2) {
    //    res = 'Numero 1 maior: ' +num1 +'e'+num2;
    //} else if (num1<num2) {
    //    res = 'Num 2 maior: ' +num1 + 'e' + num2;
    //}else{
    //    res = 'Numeros iguais: ' +num1 + 'e' +num2;
    //}
    //return res;
//}
//console.log(compararNumeros(num1,num2))

//exercicio-5)

//let anoNasc = Number(prompt('anoNascimento?'));
//function calcularIdade(anoNasc){
//    let anoAtual = 2023;
//    let idade = 2023 - anoNasc;
//    let mensagem = '';


//    if(idade < 16) {
//        mensagem = 'Voce nao pode votar';

//    } else if (idade >= 16 && idade <= 17 || idade >=70){
//        mensagem = 'voto facultativo!';

//    }else if (idade >= 18 && idade < 70){
//        mensagem = 'bora votar'
//    }else{
//        mensagem = 'idade não reconhecida pelo sistema';
//    }

//    return mensagem;

//}
//console.log(calcularIdade(anoNasc));

//switch case-05/04

//exercicio-5)

//let ensinoMedio = prompt('concluiu ensino medio? [sim/nao]');
//let idade = Number (prompt('sua idade'));
//let outraFaculdade = prompt('esta cursando faculdade [sim/nao]')
//verificarFaculdade(ensinoMedio, idade, outraFaculdade);
//let mensagem = '';
//function verificarFaculdade(ensinoMedio,idade,outraFaculdade) {
// if (ensinoMedio === 'sim' && idade >= 18 && outraFaculdade === 'nao'){
//  mensagem = 'seja bem vindo/a'
// }else{
//  mensagem = 'voce nao pode entrar em nossa instituicao'
// }
// return mensagem
//}
//let resultado = verificarFaculdade(ensinoMedio,idade,outraFaculdade);
//console.log(resultado)

//exrcicio-6)
//let pais = 'croacia';

//switch(pais) {
//  case 'brasil':
//    return 'brasileiro';
//    break;
//    default:
//      return 'nacionalidade n encontrada'
//      break;
//}

//exercicio-7)

let algarismo1 = Number(prompt('numero 1:'));
let algarismo2 = Number(prompt('numero 2:'));

let opcao = Number(prompt("digite uma opcao:\n1- soma\n2-subtracao\n3-multiplicacao \n4-divisao"));

switch(opcao) {
  case 1:
    let soma = algarismo1 + algarismo2;
    console.log(soma);
    break;
    case 2:
      let subtracao = algarismo1 - algarismo2;
      console.log(subtracao);
    break;
    case 3:
      let multiplicacao = algarismo1 + algarismo2;
      console.log(multiplicacao);
      break;
      case 4:
        let divisao = algarismo1 + algarismo2;
        console.log(divisao);
        break;
  default:
    console.log('opcao nao encontrada')
    break;
}

