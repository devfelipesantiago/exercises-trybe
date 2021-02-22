import './App.css';

function App() {

  const one = () => {
    console.log('Olá');
  }

  const two = () => {
    console.log('Mundo');
  }
  const three = () => {
    console.log('Deu bom');
  }

  return (
    <div className="App">
      <button onClick={one}>Button1</button>
      <button onClick={two}>Button2</button>
      <button onClick={three}>Button3</button>
    </div>
  );
}

export default App;
