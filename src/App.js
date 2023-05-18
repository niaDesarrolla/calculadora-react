import './App.css';
import niaDesarrollalogo from './imagenes/niaDesarrolla.png (1).png';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {
   const [input, setInput] = useState('');
   const [signoSeleccionado, setSignoSeleccionado] = useState(false)

   const agregarInput = val => {
    if (val === '+' || val === '-' || val === '*' || val === '/' || val === '.') {
      if (signoSeleccionado) {
        return; // Evita agregar signos adicionales en una operación
      }
      setSignoSeleccionado(true);
    }

    setInput(input + val);
   };

   const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Por favor ingrese valores para realizar los cálculos");
    }
    setSignoSeleccionado(false); // Reinicia el estado del signo seleccionado
  };

  const limpiarInput = () => {
    setInput('');
    setSignoSeleccionado(false);
  };


  return (
    <div className='App'>
      <div className='contenedor-logo'>
      <img src={niaDesarrollalogo} className='logo' alt='Logo de nia' />
      </div>
       <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
          </div> 
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>
            Clear
            </BotonClear>
          </div>  
       </div> 
    </div>
  );
}


export default App;
