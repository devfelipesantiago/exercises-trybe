//Criar lista de estados do Brasil
function stateList() {
  const select = document.querySelector('.list-state');
  const stateList = [
    '',
    'Acre(AC)',
    'Alagoas(AL)',
    'Amapá(AP)',
    'Amazonas(AM)',
    'Bahia(BA)',
    'Ceará(CE)',
    'Distrito Federal(DF)',
    'Espírito Santo(ES)',
    'Goiás(GO)',
    'Maranhão(MA)',
    'Mato Grosso(MT)',
    'Mato Grosso do Sul(MS)',
    'Minas Gerais(MG)',
    'Pará(PA)',
    'Paraíba(PB)',
    'Paraná(PR)',
    'Pernambuco(PE)',
    'Piauí(PI)',
    'Rio de Janeiro(RJ)',
    'Rio Grande do Norte(RN)',
    'Rio Grande do Sul(RS)',
    'Rondônia(RO)',
    'Roraima(RR)',
    'Santa Catarina(SC)',
    'São Paulo(SP)',
    'Sergipe(SE)',
    'Tocantins(TO)',
  ];

  for (const key in stateList) {
    const options = document.createElement('option');
    options.innerText = stateList[key];
    options.value = stateList[key];
    select.appendChild(options);
  }
}

// Criando as validações
function validation(event) {
  const register = document
    .querySelector('#register')
    .addEventListener('click', (event) => {
      if (document.forms.tx_name.value == '') {
        alert('Preencha campo NOME corretamente, com no máximo 40 caracteres!');
        document.forms.tx_name.focus();
        return false;
      }

      if (
        document.forms.email.value == '' ||
        document.forms.email.value.indexOf('@') == -1 ||
        document.forms.email.value.indexOf('.') == -1
      ) {
        alert(
          'Preencha campo E-MAIL corretamente! Adicione @ e a pontuação correta'
        );
        document.forms.email.focus();
        return false;
      }

      if (
        document.forms.cpf.value == '' ||
        document.forms.cpf.value.indexOf('.') == -1 ||
        document.forms.cpf.value.length < 14
      ) {
        alert(
          'Preencha campo CPF corretamente! Com 11 números e separados por ponto'
        );
        document.forms.cpf.focus();
        return false;
      }

      if (document.forms.adress.value == '') {
        alert(
          'Preencha campo Endereço corretamente, com no máximo 200 caracteres!'
        );
        document.forms.adress.focus();
        return false;
      }

      if (document.forms.city.value == '') {
        alert('Preencha campo CITY corretamente, com no máximo 28 caracteres!');
        document.forms.city.focus();
        return false;
      }

      if (document.forms.state.value == '') {
        alert('Preencha campo ESTADO corretamente!');
        document.forms.state.focus();
        return false;
      }
      if (document.forms.house.value === '') {
        console.log(document.forms.house.value);
        alert('Você deve escolher um dos campos de TIPO DE IMÓVEL!');
        document.forms.house.focus();
        return false;
      }

      if (document.forms.job.value == '') {
        alert('Preencha o campo Resumo do currículo! Máximo 500 caracteres');
        document.forms.job.focus();
        return false;
      }

      if (document.forms.office.value == '') {
        alert('Preencha o campo CARGO corretamente!');
        document.forms.office.focus();
        return false;
      }

      if (document.forms.offce_description.value == '') {
        alert('Preencha o campo Resumo do currículo! Máximo 500 caracteres');
        document.forms.offce_description.focus();
        return false;
      }

      if (document.forms.date.value == '') {
        alert('Preencha o campo de DATA corretamente!');
        document.forms.date.focus();
        return false;
      }
      return true;
    });
}

// Criar a função do 'preventDefault'
function eventOf() {
  const register = document
    .querySelector('#register')
    .addEventListener('click', (event) => {
      event.preventDefault();
    });
}

// Criar uma div com os dados do formulário
// function divInfo() {
//   if (validation()) {
//     const divInfo = document.querySelector('.info');
//     const infos = document.querySelectorAll('.input');
//     const register = document.querySelector('#register');
//     register.addEventListener('click', (event) => {
//       console.log('ok');
//       for (key of infos) {
//         //if (key.type === 'radio' && !key.checked) {
//         //  continue;
//         //}
//         divInfo.innerHTML += `<p> ${key.value} </p>`;
//       }
//     });
//   }
// }

function dataForm() {
  const div = document.querySelector('.info');
  const input = document.querySelectorAll('.input');
  for (let i = 0; i < input.length; i++) {
    console.log(validation());
    if (input[i].value !== '') {
      const parag = document.createElement('p');
      parag.innerText = input[i].value;
      div.appendChild(parag);
    }
  }
  const radio = document.querySelector('input[type="radio"]:checked');
  const parag = document.createElement('p');
  parag.innerText = radio.value;
  div.insertBefore(parag, div.childNodes[7]);
}
const register = document.querySelector('#register');
register.addEventListener('click', dataForm);

stateList();
eventOf();
validation();
