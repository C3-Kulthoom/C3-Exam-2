import React from "react";
import "./App.css";
import  Creat  from "./combonents/Creat"
import Render from "./combonents/Render" 
import { Route } from "react-router-dom"
const App = () => {
  return (
    <>
      <h1>App Component</h1>
<Route  exact path = "/library/create_book" component ={Creat}/>
<Route  exact path = "/library" component ={Render}/>

    </>
  );
};

export default App;
