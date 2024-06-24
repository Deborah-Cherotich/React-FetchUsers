import React from 'react';

import Login from "./Login";
import Users from "./Users";

import Form from "./Form"
export const Introduction = () => {
  return <h2>What is React?</h2>;
};


const App = () => {
  return (
     <div>
      <Login/> 
     <Users/>
     <Form/>
      </div>
   
  );
};
export default App;
