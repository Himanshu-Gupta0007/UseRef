import React, { useRef, useState } from "react";

const App = () => {
  const [time, settime ] = useState(0)
  const timeerRef = useRef(null);


  function start() {
   timeerRef.current = setInterval(() => {
      settime(time => time + 1)
    }, 1000);
  }

  function stop() {
    clearInterval(timeerRef.current)
    timeerRef.current = null;
    
  }

  function Reset() {
    stop()
    settime(0)
  }
  return (
    <>
    <h1>STOPWATCH:{time} SECONDS</h1>
      <div>
        <button onClick={start}>start</button>
        <button onClick={stop}>stop</button>
        <button onClick={Reset}>Reset</button>
      </div>
      
    </>
  );
};

export default App;
