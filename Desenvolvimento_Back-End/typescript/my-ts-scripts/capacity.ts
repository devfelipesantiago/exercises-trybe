/**
 * Crie um script para converter unidades de medida de capacidade:

Esse script deverá se chamar capacity.ts;
Ele deverá possuir uma função chamada convert que recebe como parâmetro:
valor - number
unidade base - string
unidade para a conversão - string
 */
const unidades = [ 'kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml' ];

export function convert(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = unidades.indexOf(fromUnit);
  const toIndex = unidades.indexOf(toUnit);
  const exponent = toIndex - fromIndex;

  return value * Math.pow(10, exponent);
}