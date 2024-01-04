import { Container, Content, Row } from "./styles";

import Button from "./components/Button";
import Input from "./components/Input";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");

  const [firstNumber, setFirstNumber] = useState("0");

  const [operation, setOperation] = useState("");

  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
  };

  const handleOperations = (operator) => {
    setFirstNumber(String(currentNumber));
    setCurrentNumber("0");
    setOperation(operator);
  };

  //const handleAddNumber = (number) => {
  //  setCurrentNumber((prev) => `${prev === "0" ? " " : prev}${number}`);
  //};
  const handleAddNumber = (number) => {
    setCurrentNumber((prev) => {
      if (prev === "0" || prev === " ") {
        return number;
      } else {
        return prev + number;
      }
    });
  };

  const calculateResult = (operator) => {
    if (firstNumber === "0") {
      handleOperations(operator);
    } else {
      let result;
      switch (operator) {
        case "+":
          result = Number(firstNumber) + Number(currentNumber);
          break;
        case "-":
          result = Number(firstNumber) - Number(currentNumber);
          break;
        case "*":
          result = Number(firstNumber) * Number(currentNumber);
          break;
        case "/":
          result = Number(firstNumber) / Number(currentNumber);
          break;
        case "^":
          result = Number(firstNumber) ** Number(currentNumber);
          break;
        default:
          break;
      }
      setCurrentNumber(String(result));
      setOperation("");
    }
  };

  const handleSumNumbers = () => calculateResult("+");
  const handleSubNumbers = () => calculateResult("-");
  const handleMulNumbers = () => calculateResult("*");
  const handleDivNumbers = () => calculateResult("/");
  const handleExpNumbers = () => calculateResult("^");

  const handleEquals = () => {
    if (firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
      switch (operation) {
        case "+":
          handleSumNumbers();
          break;
        case "-":
          handleSubNumbers();
          break;
        case "*":
          handleMulNumbers();
          break;
        case "/":
          handleDivNumbers();
          break;
        case "^":
          handleExpNumbers();
          break;
        default:
          break;
      }
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="*" onClick={handleMulNumbers} />
          <Button label="/" onClick={handleDivNumbers} />
          <Button label="x²" onClick={handleExpNumbers} />
          <Button label="C" onClick={() => handleOnClear()} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="-" onClick={handleSubNumbers} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="+" onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
