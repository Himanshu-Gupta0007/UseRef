import React, { useMemo, useState } from 'react'

const App = () => {
  const [count, setcount] = useState(0);



  function task(num){
    console.log("expensive task chl raha hai");
    

    for(let i = 0 ; i<=1000000000; i++){
      
    }
    return num *2
    
  }

  let value = useMemo(()=>{
   return  task(5);
  },[])

  return (
    <>

    <div>
      <button onClick={(()=>{
        setcount(count+1);
      })}>increment</button>
    </div>
    <h1>{count}</h1>
    <h2>{value}</h2>



    </>
  )
}

export default App