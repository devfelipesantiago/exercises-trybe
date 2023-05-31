/**
 * Crie um script para converter unidades de medida de massa:

Esse script deverá se chamar mass.ts;
Ele deverá possuir uma função chamada convert que recebe como parâmetro:
valor - number
unidade base - string
unidade para a conversão - string
 */
const unidades = [ 'kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg' ]

export const convert = (valor: number, uniBase: string, uniConv: string) => {

  const unidadeBase = unidades.indexOf(uniBase);
  const unidadeConversao = unidades.indexOf(uniConv);
  const exponent = unidadeConversao - unidadeBase;
  return valor * Math.pow(10, exponent);
}