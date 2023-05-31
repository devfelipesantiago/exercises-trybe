/*
Crie um script para converter unidades de medida de comprimento:

Esse script deverá se chamar length.ts;
Ele deverá possuir uma função chamada convert que recebe como parâmetro:
valor - number
unidade base - string
unidade para a conversão - string
*/
const unidades = [ 'km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm' ]

export const convert = (valor: number, uniBase: string, uniConv: string) => {

  const unidadeBase = unidades.indexOf(uniBase);
  const unidadeConversao = unidades.indexOf(uniConv);
  const exponent = unidadeBase - unidadeConversao;
  return valor * Math.pow(10, exponent);
}