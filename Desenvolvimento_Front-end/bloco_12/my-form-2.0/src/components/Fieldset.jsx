import React from 'react';

export default class Fieldset extends React.Component {
  render() {
    return (
      <form>
        <fieldset>
          <legend>Personal information</legend>
          <div class="box-content">
            <label for="name">Name</label>
            <input class="input"
              type="text"
              name="tx_name"
              id="name"
              required
              placeholder="Digite seu nome"
              maxlength="40"
            />
          </div>
          <div class="box-content">
            <label for="email">Email</label>
            <input class="input" type="text" name="email" id="email" maxlength="50" required />
          </div>
          <div class="box-content">
            <label for="cpf">CPF</label>
            <input class="input" type="text" name="cpf" id="cpf" required maxlength="14" />
          </div>
          <div class="box-content">
            <label for="adress">Address</label>
            <input class="input"
              type="text"
              name="adress"
              id="adress"
              required
              maxlength="200"
            />
          </div>
          <div class="box-content">
            <label for="city">City</label>
            <input class="input" type="text" name="city" id="city" required maxlength="28" />
          </div>
          <div class="box-content">
            <span>Select your state: </span>
            <select class="input list-state" value='' name="state" id="state" ></select>
          </div>
          <fieldset class="radio-content">
            <legend>Property type</legend>
            <input type="radio" name="house" id="house" value='Casa' required />
            <label for="house">House</label>
            <input type="radio" name="house" id="apartment" value='Apartamento' required />
            <label for="apartment">Apartment</label>
          </fieldset>

          <fieldset class="jobs">
            <legend>Resume Summary</legend>
            <div class="box-content">
              <textarea class="input" name="job" id="" maxlength="100" required></textarea>
            </div>
            <div class="box-content">
              <label for="office">Office</label>
              <input class="input" type="text" name="of'fice" id="office" required maxlength="40" />
            </div>
            <div class="box-content">
              <label for="offce-description">Job description</label>
              <input class="input" required maxlength="500" type="text" name="offce-description" id="offce_description" />
            </div>
            <div class="box-content">
              <label for="date">Start date</label>
              <input class="input" type="date" name="date" id="date" required />
            </div>
            <div class="bnt">
              <button class="input" type="reset"  >Delete Form</button>
              <button class="input" type="submit" id="register">Register</button>
            </div>
          </fieldset>
        </fieldset>
      </form >
    );
  }
}