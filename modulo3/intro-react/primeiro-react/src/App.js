import perfil from './imagens/perfil.jpeg'
import './App.css';

function App() {
  function mensagem(){
    alert("Boa Noite!");
  }

  return (
    <div className="App">
      <h1>Olá! Eu sou o Thiago Luca</h1>
      <img className="perfil" src={perfil} alt="foto-pessoal" />
      <p>Este é o meu primeiro site React</p>
      <button onClick={mensagem}>Aperte este botão</button>
    </div>
  );
}

export default App;
