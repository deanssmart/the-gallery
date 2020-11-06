import * as THREE from "three"
import React, { useEffect, useRef, useState } from "react"
import { useSphere } from "use-cannon"
import { useThree, useFrame } from "react-three-fiber"

const keys = { KeyW: "forward", KeyS: "backward", KeyA: "left", KeyD: "right", Space: "jump", ShiftLeft:"speed" }
const moveFieldByKey = (key) => keys[key]
const direction = new THREE.Vector3()
const frontVector = new THREE.Vector3()
const sideVector = new THREE.Vector3()

const usePlayerControls = () => {
  const [movement, setMovement] = useState({ forward: false, backward: false, left: false, right: false, jump: false, speed: 5 })

  useEffect(() => {
    const handleKeyDown = (e) => {
        switch(e.code) {
            case "KeyW": //forward
            case "KeyA": // left           
            case "KeyS": // backwards           
            case "KeyD": // right    
            case "Space": // jump
            setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: true }))
                break;
            case "ShiftLeft":
            setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: 10 }))
            break;
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
            setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: false }))
                break;
            case "ShiftLeft":
            setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: 5 }))
            break;
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

export const Player = (props) => {
  const [ref, api] = useSphere(() => ({ mass: 1, type: "Dynamic", position: [0, 10, 30], ...props }))
  const { forward, backward, left, right, jump, speed } = usePlayerControls()
  const { camera } = useThree()
  const velocity = useRef([0, 0, 0])
  useEffect(() =>  api.velocity.subscribe((v) => (velocity.current = v)), [api.velocity])
  useFrame(() => {
    camera.position.copy(ref.current.position)
    frontVector.set(0, 0, Number(backward) - Number(forward))
    sideVector.set(Number(left) - Number(right), 0, 0)
    direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(speed).applyEuler(camera.rotation)
    api.velocity.set(direction.x, velocity.current[1], direction.z)
    if (jump && Math.abs(velocity.current[1].toFixed(2)) < 100) api.velocity.set(velocity.current[0], 10, velocity.current[2])
  })
  return <mesh ref={ref} />
}
