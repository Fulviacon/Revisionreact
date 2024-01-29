import React from 'react';

const Users = ( ) => {
const users = [
    {
      id: 1,
      name: "Johan Doe",
      email:"johandoe@example.com"
    },
    {
      id: 2,
      name: "Jan Doe",
      email:"jandoe@example.com"
    },
    {
      id: 3,
      name: "Ian Doe",
      email:"iandoe@example.com"
    },
    { 
      id: 4,
      name: "Han Doe",
      email:"handoe@example.com"
    },
    {
      id: 5,
      name: "An Doe",
      email:"Andoe@example.com"
    },
    {
      id: 6,
      name: "John Doe",
      email:"johndoe@example.com"
    },
    {
      id: 7,
      name: "J Doe",
      email:"jdoe@example.com"
    },
    {
      id: 8,
      name: "Ohan Doe",
      email:"ohandoe@example.com"
    },
    {
      id: 9,
      name: "Jin Doe",
      email:"jindoe@example.com"
    },
    {
      id: 10,
      name: "Joe Doe",
      email:"joedoe@example.com"
    },
  ];
  
    return (  
    
     <div className='container'>  
     <h1 className='app-title'>Lista de Usuarios</h1>
      
      <ul>
      {
          users.map((user => (
          <li key ={user.id}>{user.name}</li>
        )))}
  
  
      </ul>
      </div>
    );
  }
  
  export default Users;
  
  
  