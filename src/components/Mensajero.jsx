function Mensajero ({sender, message}){  
    
  return(  
    <>
      <h1> Soy el Mensajero</h1>
      <p>Remitente: {sender}</p>
      <p className = 'tomato'>{message}</p>

 </>
  );
}

 export default Mensajero; 