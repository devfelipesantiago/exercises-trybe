import React from 'react';
import PersonalInfo from './components/PersonalInfo';
import ResumeSumary from './components/ResumeSumary';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      countryState: '',
      role: '',
      roleDescription: '',
      formError: {},
      submitted: false,
    };
  }

  render() {
    return (
      <div className="App">
        <form>
          <h1>Formulário react</h1>
          <PersonalInfo />
          <ResumeSumary />
        </form>
      </div>
    );
  }
}

export default App;
