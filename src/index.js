import React, { useState, useEffect } from "react"
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//     <div className="dot"></div>
//   </React.StrictMode>,
//   document.getElementById('root')
// );


function Overlay() {
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
          <div className={"instructions"}>← Click the dot to center cursor
          <br /><br />
        Look: MOUSE<br/>  
				Move: WASD<br/>
				Jump: SPACE<br/>
        Run: SHIFT<br/><br/>
				
        Night Mode: N<br/>
          </div>
        </div>
      
      <div className="dot" 
      style={{ pointerEvents: ready ? "none" : "all" }} 
      // onClick={() => setReady(true)}
       />
      </>
  )
}

ReactDOM.render(<Overlay />, document.getElementById("root"))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
