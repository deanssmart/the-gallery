import { useEffect, useState } from "react"

const moveFieldByKey = (key) => {
    const keys = { 
        KeyW: "forward",
        KeyS: "backward",
        KeyA: "left",
        KeyD: "right", 
        Space: "jump", 
        ShiftLeft:"speed",
        KeyF: "fly"
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
        speed: 10,
        fly: false,
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
                        [moveFieldByKey(e.code)]: 20 
                    }))
                    return;
                case "KeyF":
                    setMovement((m) => ({ 
                        ...m, 
                        [moveFieldByKey(e.code)]: !movement.fly 
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
                        [moveFieldByKey(e.code)]: 10 
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
    }, [movement.fly])
    
    return movement
}

export default usePlayerControls