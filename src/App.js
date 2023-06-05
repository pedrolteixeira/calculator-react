
import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import { useState } from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };

  const addNumeros = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const somarNumeros = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('+')
    }else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  const subtrairNumeros = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('-')
    }else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  const multiplicarNumeros = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('*')
    }else {
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  const dividirNumeros = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('/')
    }else {
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  const handleEquals = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
        switch(operation){
          case '+':
            somarNumeros();
            break;
          case '-':
            subtrairNumeros();
            break;
          case '*':
            multiplicarNumeros();
            break;
          case '/':
            dividirNumeros();
            break;
          default: 
            break;
        }
    }

  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="x" onClick={multiplicarNumeros}/>
          <Button label="/" onClick={dividirNumeros}/>
          <Button label="c" onClick={handleOnClear}/>
          <Button label="."/>
        </Row>
        <Row>
          <Button label="7" onClick={() => addNumeros('7')}/>
          <Button label="8" onClick={() => addNumeros('8')}/>
          <Button label="9" onClick={() => addNumeros('9')}/>
          <Button label="-" onClick={subtrairNumeros}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => addNumeros('4')}/>
          <Button label="5" onClick={() => addNumeros('5')}/>
          <Button label="6" onClick={() => addNumeros('6')}/>
          <Button label="+" onClick={somarNumeros}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => addNumeros('1')}/>
          <Button label="2" onClick={() => addNumeros('2')}/>
          <Button label="3" onClick={() => addNumeros('3')}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
