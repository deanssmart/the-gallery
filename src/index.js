import React, { useState, useEffect } from "react"
import ReactDOM from 'react-dom';
import './style/css/index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

const Overlay = () => {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const handleLockchange = (e) => {
      if(document.pointerLockElement === null) {
          setReady(false)        
      } else {
          setReady(true)
      }
    }
    
    document.addEventListener("pointerlockchange", handleLockchange);
    return () => {
      document.removeEventListener("pointerlockchange", handleLockchange)
    }
  })  

  return (
    <>
      <App />
      <div className={ready ? "" : "overlay"}>
        <div className={"start"}>Click to Explore</div>
        <img className={ready ? "" : "controlsL"} src="./assets/Images/ControlsL.png" alt="Move: WASD	Jump: SPACE Run: SHIFT"></img>
        <img className={ready ? "" : "controlsR"} src="./assets/Images/ControlsR.png" alt="Look: MOUSE"></img>
        <img className={ready ? "" : "controlsTR"} src="./assets/Images/ControlsTR.png" alt="Toggle Performance: P Toggle Night Mode: N"></img>
      </div>
      <div className="dot" 
      style={{ pointerEvents: ready ? "none" : "all" }} 
      />
      </>
  )
}

ReactDOM.render(<Overlay />, document.getElementById("root"))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
