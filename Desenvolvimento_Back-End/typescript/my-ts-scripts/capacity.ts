/**
 * Crie um script para converter unidades de medida de capacidade:

Esse script deverá se chamar capacity.ts;
Ele deverá possuir uma função chamada convert que recebe como parâmetro:
valor - number
unidade base - string
unidade para a conversão - string
 */
import readline from 'readline-sync';
const unidades = [ 'kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml' ];

export function convert(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = unidades.indexOf(fromUnit);
  const toIndex = unidades.indexOf(toUnit);
  const exponent = toIndex - fromIndex;

  return value * Math.pow(10, exponent);
}

function exec() {
  // pegamos o valor a ser convertido digitado pela pessoa usuária
  const value = readline.questionFloat('Digite o valor a ser convertido: \n');

  // pedimos que a pessoa usuária escolha a unidade base
  const fromUnitChoiceIndex = readline.keyInSelect(unidades, 'Escolha um número para a unidade base:');

  // pedimos que a pessoa usuária escolha a unidade para conversão
  const toUnitChoiceIndex = readline.keyInSelect(unidades, 'Escolha um número para a conversão:');

  const toUnitChoice = unidades[ toUnitChoiceIndex ];
  const fromUnitChoice = unidades[ fromUnitChoiceIndex ];

  // Se o usuário escolher a opção 0 (cancelar), uma mensagem é impressa no terminal e usamos o return para encerrar a execução
  if (!fromUnitChoice || !toUnitChoice) {
    console.log(`Função cancelada`);
    return 0;
  }

  const result = convert(value, fromUnitChoice, toUnitChoice);

  // montamos a mensagem de saída
  const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;

  // printamos a mensagem de saída no terminal
  console.log(message);
}

exec();