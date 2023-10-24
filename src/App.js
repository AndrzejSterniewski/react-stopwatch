import Button from "./components/Button/Button";
import Time from "./components/Time/Time";
import { useEffect, useState } from "react";

function App() {

  const [ time, setTime] = useState(0);
  const [ timer, setTimer] = useState(null);

  useEffect(() => {
    return () => {
      if(timer) clearInterval(timer);
    };
  }, []);

  const startTime = () => {
    if (!timer) {
      setTimer(setInterval(() =>{
        setTime(prevValue => prevValue + 50);
      }, 50))
    }
  }

  const stopTime = () => {
    clearInterval(timer);
    setTimer(null);
  }
  
  const resetTime = () => {
    setTime(0);
  }

  return (
    <div className="App">
      <h1>React Stopwatch</h1>
      <Time time={time}/>
      <Button onClick={startTime}>Start</Button>
      <Button onClick={stopTime}>Stop</Button>
      <Button onClick={resetTime}>Reset</Button>
    </div>
  );
}

export default App;