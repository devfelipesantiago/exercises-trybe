const findX = word => word.replace('x', 'Bebeto');
console.log(findX('Tryber x aqui!'));

const skills = [
    'HTML',
    'JavaScript',
    'CSS',
    'SoftSkill',
    'Git'
]

function fullFunction(messeger){
    console.log(`${messeger} Minhas cinco principais habilidades são: ${skills}`);
}

fullFunction(findX())