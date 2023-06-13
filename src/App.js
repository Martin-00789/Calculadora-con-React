import './App.css';
import Boton from "./Componentes/Boton";
import Pantalla from "./Componentes/Pantalla";
import BotonClear from './Componentes/BotonClear';
import { useState } from "react";
import { evaluate } from 'mathjs';


function App() {

  const [input, setinput] = useState("");

  const agregarInput = val => {
    setinput (input + val);
  };

  const calcularResultado = () => {
    if (input){
      let eval_;
      try {
        eval_ =  evaluate(input)
        // console.log("EVAL::", eval_)
      } catch (error) {
        // console.log("EVAL::", eval_)
        eval_ = "SYNTAX ERROR"
      }
      setinput(eval_);
    } else {
      alert("Por favor ingrese valores para realizar los cálculos.");
    }
  };


  return (
    <div className="App">
      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear= { () => setinput("")}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
