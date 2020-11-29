import { useEffect, useState } from "react"

const moveFieldByKey = (key) => {
    const keys = { 
        KeyW: "forward",
        KeyS: "backward",
        KeyA: "left",
        KeyD: "right", 
        Space: "jump", 
        ShiftLeft:"speed"
     }
     return keys[key]
}

const usePlayerControls = () => {
    const [movement, setMovement] = useState({
        forward: false,
        backward: false,
        left: false,
        right: false,
        jump: false,
        speed: 15
    })

    useEffect(() => {        
        const handleKeyDown = (e) => {
            switch(e.code) {
                case "KeyW": //forward
                case "KeyA": // left           
                case "KeyS": // backwards           
                case "KeyD": // right    
                case "Space": // jump                
                    setMovement((m) => ({
                        ...m, 
                        [moveFieldByKey(e.code)]: true 
                    }))
                    return;
                case "ShiftLeft":
                    setMovement((m) => ({ 
                        ...m, 
                        [moveFieldByKey(e.code)]: 30 
                    }))
                    return;              
                default: return;
            }
        }

        const handleKeyUp = (e) => {
            switch(e.code) {
                case "KeyW": //forward
                case "KeyA": // left           
                case "KeyS": // backwards           
                case "KeyD": // right    
                case "Space": // jump                
                    setMovement((m) => ({
                        ...m, 
                        [moveFieldByKey(e.code)]: false 
                    }))
                    return;
                case "ShiftLeft":
                    setMovement((m) => ({ 
                        ...m, 
                        [moveFieldByKey(e.code)]: 15 
                    }))
                    return;
                default: return;
            }
        }

        document.addEventListener("keydown", handleKeyDown)
        document.addEventListener("keyup", handleKeyUp)

        return () => {
            document.removeEventListener("keydown", handleKeyDown)
            document.removeEventListener("keyup", handleKeyUp)
        }
    }, [])

    return movement
}

export default usePlayerControls