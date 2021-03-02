import React from 'react';

const stateList = ['', 'Acre(AC)', 'Alagoas(AL)', 'Amapá(AP)', 'Amazonas(AM)', 'Bahia(BA)', 'Ceará(CE)', 'Distrito Federal(DF)', 'Espírito Santo(ES)', 'Goiás(GO)', 'Maranhão(MA)', 'Mato Grosso(MT)', 'Mato Grosso do Sul(MS)', 'Minas Gerais(MG)', 'Pará(PA)', 'Paraíba(PB)', 'Paraná(PR)', 'Pernambuco(PE)', 'Piauí(PI)', 'Rio de Janeiro(RJ)', 'Rio Grande do Norte(RN)', 'Rio Grande do Sul(RS)', 'Rondônia(RO)', 'Roraima(RR)', 'Santa Catarina(SC)', 'São Paulo(SP)', 'Sergipe(SE)', 'Tocantins(TO)',
];

export default class Fieldset extends React.Component {
  render() {
    return (
      <fieldset>
        <legend>Personal information</legend>

        <div className="box-content">
          <label for="name">Name</label>
          <input className="input"
            type="text"
            name="tx_name"
            id="name"
            required
            placeholder="Digite seu nome"
            maxlength="40"
          />
        </div>

        <div className="box-content">
          <label for="email">Email</label>
          <input className="input" type="text" name="email" id="email" maxlength="50" required />
        </div>

        <div className="box-content">
          <label for="cpf">CPF</label>
          <input className="input" type="text" name="cpf" id="cpf" required maxlength="14" />
        </div>

        <div className="box-content">
          <label for="adress">Address</label>
          <input className="input"
            type="text"
            name="adress"
            id="adress"
            required
            maxlength="200"
          />
        </div>

        <div cclassName="box-content">
          <label for="city">City</label>
          <input className="input" type="text" name="city" id="city" required maxlength="28" />
        </div>

        <div className="box-content">
          <span>Select your state: </span>
          <select className="input list-state" value="" name="countryState" id="countryState" />
        </div>

        <fieldset className="radio-content">
          <legend>Property type</legend>
          <input type="radio" name="house" id="house" value='Casa' required />
          <label for="house">House</label>
          <input type="radio" name="house" id="apartment" value='Apartamento' required />
          <label for="apartment">Apartment</label>
        </fieldset>

      </fieldset>
    );
  }
}