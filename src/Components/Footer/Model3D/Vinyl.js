

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Vinyl({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/vinyl.gltf')
  return (
    
    <group ref={group} {...props} dispose={null}>
     
      <group rotation={[-Math.PI / 2, 0, 10]}>
        <mesh geometry={nodes.mesh_0.geometry} material={materials.wood} />
        <mesh geometry={nodes.mesh_1.geometry} material={materials.colored} />
        <mesh geometry={nodes.mesh_2.geometry} material={materials.glass} />
        <mesh geometry={nodes.mesh_3.geometry} material={materials.metal} />
        <mesh geometry={nodes.mesh_4.geometry} material={materials.plastic} />
        <mesh geometry={nodes.mesh_5.geometry} material={nodes.mesh_5.material} />
        <mesh geometry={nodes.mesh_6.geometry} material={nodes.mesh_6.material} />
        <mesh geometry={nodes.mesh_7.geometry} material={materials['steel_2.0']} />
      </group>
    </group>
  )
}

useGLTF.preload('/vinyl.gltf')
