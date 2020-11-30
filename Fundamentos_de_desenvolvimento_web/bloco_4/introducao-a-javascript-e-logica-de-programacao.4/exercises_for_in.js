let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

console.log("Bem-vinda " + info.personagem);
console.log("1-----------------------------------------------------");

info.recorrente = 'Sim';

console.log(info);
console.log('2-----------------------------------------------------');

for (const key in info) {
  console.log(key)
}
console.log('3-----------------------------------------------------');

for (let key in info) {
  console.log(info[key]);
}
console.log('4-----------------------------------------------------');

let info2 = {
  personagem: "Pato Donald",
  origem: "Christimas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O ultimo MacPatinhas",
  recorrente: 'Sim'
}
console.log(info.personagem + ' e ' + info2.personagem);
console.log(info2.personagem + ' e ' + info2.origem);
console.log(info.nota + ' e ' + info2.nota);
console.log('Ambos recorrentes ' + info.recorrente);
