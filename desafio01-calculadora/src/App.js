
import Input from './components/Input';
import { Button, ButtonS } from './components/Button/index';

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

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const handleSumNumbers = () => {
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

  const handleMinusNumbers = () => {
    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('-')
    }else {
      const minus = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(minus))
      setOperation('')
    }
  }

  const handleMultiNumbers = () => {
    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('*')
    }else {
      const multi = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multi))
      setOperation('')
    }
  }

  const handleDivNumbers = () => {
    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('/')
    }else {
      const div = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(div))
      setOperation('')
    }
  }

  const handlePercNumbers = () => {
    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('%')
    }else {
      const perc = Number(firstNumber)/ 100 * Number(currentNumber) ;
      setCurrentNumber(String(perc))
      setOperation('')
    }
  } 

  const handleEquals = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
        switch(operation){
          case '+':
            handleSumNumbers();
            break;
          case '-':
            handleMinusNumbers();
            break;
          case '*':
            handleMultiNumbers();
            break;
          case '/':
            handleDivNumbers();
            break;
          case '%':
            handlePercNumbers();
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
          <ButtonS label="C" onClick={handleOnClear} />
          <ButtonS label="%" onClick={handlePercNumbers}/>
          <ButtonS label="&#10135;" onClick={handleDivNumbers}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <ButtonS label="&#10006;" onClick={handleMultiNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <ButtonS label="&#10134;" onClick={handleMinusNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <ButtonS label="&#10133;" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="," onClick={() => handleAddNumber('.')}/>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          
          <ButtonS label="=" onClick={handleEquals}/>
          </Row>
      </Content>
    </Container>
  );
}

export default App;
