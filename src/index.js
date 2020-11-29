import React, { useState, useEffect } from "react"
import ReactDOM from 'react-dom';
import './style/css/index.css';
// import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import Loading from './components/Loading/Loading';

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
        {/* <div className={ready ? "" : "overlay"}> */}
          {/* <div className={"instructions"}> Click to Start<br/>
          <div className={"controls"}></div> */}
        {/* <br /><br />
        Look: MOUSE<br/>  
				Move: WASD<br/>
				Jump: SPACE<br/>
        Run: SHIFT<br/><br/>

        Toggle Night Mode: N<br/><br/>				
        Toggle Flight Mode: F<br/>
        (Hold space to fly)<br/>         */}
          {/* </div>
        </div> */}
        <img className={ready ? "" : "overlay"} src="./assets/Images/Controls2.png"></img>
      
      <div className="dot" 
      style={{ pointerEvents: ready ? "none" : "all" }} 
      // onClick={() => setReady(true)}
       />
      <Loading />
      </>
  )
}

ReactDOM.render(<Overlay />, document.getElementById("root"))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
