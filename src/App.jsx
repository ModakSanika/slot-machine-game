import React from "react";
import Navv from "./Nav";
import Slot from "./slot-machine";
const App =()=>{
  return(

    <>
  
    <Navv/>
    <section>
    <div className="slotmachine">
    <Slot x= '🐱' y=' 🐭' z='🧀' /> 
    <Slot  x= '🎨' y='🎨' z= '🎨' /> 
    <Slot  x= '💸' y='🏡' z='😆' /> 
    <Slot  x= ' 🌃 ' y=' ❤️ ' z="💑" /> 
    <Slot  x= "😽" y='😽' z= '😽'/> 
    </div>
    </section>
    </>

  )
}
export default App; 