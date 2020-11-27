import React, { useState, useEffect } from 'react';
import * as THREE from 'three'
import { useTransition, a } from 'react-spring'

const Loading = () => {
    const [finished, set] = useState(false)
    const [width, setWidth] = useState(0)
  
    useEffect(() => {
      THREE.DefaultLoadingManager.onLoad = () => set(true)
      THREE.DefaultLoadingManager.onProgress = (url, itemsLoaded, itemsTotal) =>
        setWidth((itemsLoaded / itemsTotal) * 200)
    }, [])
  
    const props = useTransition(finished, null, {
      from: { opacity: 1, width: 0 },
      leave: { opacity: 0 },
      update: { width },
    })
  
    return props.map(
      ({ item: finished, key, props: { opacity, width } }) =>
        !finished && (
          <a.div className="loading" key={key} style={{ opacity }}>
           <h1 className="welcome">The Gallery</h1>   
            <div className="loading-bar-container">                
              <a.div className="loading-bar" style={{ width }} />
            </div>
          </a.div>
        ),
    )
  }

  export default Loading;