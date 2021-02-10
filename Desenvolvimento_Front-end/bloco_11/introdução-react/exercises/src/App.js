import React from 'react';
import tasks from './task';

const tarefas = ["Acordar", "Tomar café", "Escovar os dentes", "Ir trabalhar"];

class App extends React.Component {
  render() {
    return (
      <ol>
        {tarefas.map(task => tasks(task))}
      </ol>
    );
  }
}

export default App;
