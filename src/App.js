import './App.css';
import Button from './componentes/Button';
import ClearButton from './componentes/ClearButton';
import Display from './componentes/Display';

import {useState} from 'react';
import {evaluate} from 'mathjs'


function App() {

  const [input,setInput] = useState('')

  const addInput = val => {
    setInput(input + val);
  }

  const result = () => {
    if(input){
    setInput(evaluate(input))
  } else {
    alert('Please, set values to calculate')
  }
  }

  return (
    <div className='App'>
      <div className='calculator-container'>
        <Display input={input}/>
        <div className='fila'>
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>+</Button>
        </div>
        <div className='fila'>
        <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>-</Button>
        </div>
        <div className='fila'>
        <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>*</Button>
        </div>
        <div className='fila'>
        <ClearButton handleClear={() => setInput('')}>AC</ClearButton>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={addInput}>/</Button>
        </div>
        <div className='fila'>
        <Button handleClick={result}>=</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
