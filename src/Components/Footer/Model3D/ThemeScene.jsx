import React from 'react'
import { Canvas } from '@react-three/fiber'



const ThemeScene = ({children}) => {
    return (
        
        <Canvas  shadows dpr={[1, 2]} camera={{ position: [150, 150, 0], fov: 45 }}>
          {children}
        </Canvas>
    )
}


export default ThemeScene;