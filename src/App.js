import Button from "./components/Button/Button";
import Time from "./components/Time/Time";
import { useEffect, useState } from "react";

function App() {

  const [ time, setTime] = useState(0);


  useEffect(() => {

    return () => {
      if(timer) clearInterval(timer);
    };
  }, []);

  const timer = setInterval(() => {...}, 1000);

  setInterval(() =>{
    setTime(prevValue => prevValue + 1);
  }, 1)

  const startTime = () => {

  }

  const stopTime = () => {
    clearInterval(timer);
  }
  
  const resetTime = () => {
    setTime(0);
  }

  return (
    <div className="App">
      <h1>React Stopwatch</h1>
      <Time {...time} />
      <Button onClick={startTime}/>Start<Button/>
      <Button onCLick={stopTime}>Stop</Button>
      <Button onClick={resetTime}>Reset</Button>
    </div>
  );
}

export default App;