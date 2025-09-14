import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Display from "./components/Display";
import Btns from "./components/buttons";
import { useState } from "react";
function App(){
   let[val,setval] = useState("");
   const onButtonClick = (buttonText)=>{
    if(buttonText === "C"){
      setval("");
    }
    else if(buttonText === "="){
      const result = eval(val);
      setval(result);
    }
    else{
      const newDisplayValue = val + buttonText;
      // console.log(buttonText);
      setval(newDisplayValue);
    }
  }

  return(<>
  <div className="main-box">
    <h1>Calculator </h1>
    <hr />
    <Display value = {val}></Display>
    <Btns onButtonClick ={
      onButtonClick}></Btns>
    <footer><p>Made with ❤️ by Numan</p></footer>
  </div> 
  
  </>)
}

export default App;