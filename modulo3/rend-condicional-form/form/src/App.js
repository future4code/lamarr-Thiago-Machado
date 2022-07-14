import React, {useState} from 'react';
import {Etapa1} from './components/etapa1'
import {Etapa2} from './components/etapa2'
import {Etapa3} from './components/etapa3'
import{Final} from './components/final'

function App() {
  const [etapa, setEtapa] = useState(1)


  function RenderizaEtapa(){
    switch(etapa){
      case 1:
          return <Etapa1/>
          break;
      case 2:
          return <Etapa2/>
          break;
      case 3:
          return <Etapa3/>
          break;
      case 4:
          return <Final/>
          break;
      default:
          break;
  }
  }

  function irParaProximaEtapa(){
    const valor = etapa+1
    setEtapa(valor)
  }

  function Button(){
    if(etapa < 4){
      return (<button onClick={irParaProximaEtapa}>PRÓXIMA ETAPA</button>)
    }
  }



  return (
    <div>
      {<RenderizaEtapa/>}
      {<Button/>}
    </div>
  );
}

export default App;
