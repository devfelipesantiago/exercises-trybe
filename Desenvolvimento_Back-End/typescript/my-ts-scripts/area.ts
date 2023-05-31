// ./area.ts

const unidades = [ 'km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²' ];

export function convert(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = unidades.indexOf(fromUnit);
  const toIndex = unidades.indexOf(toUnit);
  const exponent = toIndex - fromIndex;

  return value * Math.pow(100, exponent);
}