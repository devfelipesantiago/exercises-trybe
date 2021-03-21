// App.js
import React from 'react';
import ValidEmail from './ValidEmail'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      saveEmail: '',
    };
  }

  changeEmail(value) {
    this.setState({ email: value });
  }

  changeSaveEmail(value) {
    this.setState({ saveEmail: value, email: '' });
  }

  renderText(saveEmail) {
    if (saveEmail) return <ValidEmail email={ saveEmail } />;

  }

  render() {
    const { email, saveEmail } = this.state;
    return (
      <div className="App" >
        <label htmlFor="id-email">
          Email
          </label>
        <input id="id-email" type="email" value={ email } onChange={ (e) => this.changeEmail(e.target.value) } />
        <input id="btn-send" type="button" value="Enviar"
          data-testid="id-send" onClick={ () => this.changeSaveEmail(email) } />
        <input id="btn-back" type="button" value="Voltar" />
        { this.renderText(saveEmail) }
        {/* <ValidEmail email={ saveEmail } /> */ }
      </div>
    );
  }
}

export default App;
