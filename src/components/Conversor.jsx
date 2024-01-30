import React from 'react'

const Conversor = () => {
const [conversor, setConversor]= useState (0);
const convertir = (e)=>{  
    let monto=e.target.value;
    let cotizar =monto/300;
    setConversor (cotizar);
}
  return (
    <div>
        <input onChange={convertir}type="text" placeholder='Ingrese pesos'/>
        <h1>Su monto en dólares es: {conversor}</h1>
      
    </div>
  )
}

export default Conversor
