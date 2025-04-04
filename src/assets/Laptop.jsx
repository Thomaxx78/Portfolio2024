import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Laptop(props) {
  const { nodes, materials } = useGLTF('/models/laptop.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[1.936, 11.589, -16.73]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.137, 0.129, 0.127]}>
            <mesh geometry={nodes.MaterialFBXASC032FBXASC0352142150880.geometry} material={materials.MaterialFBXASC032FBXASC0352142150880} />
            <mesh geometry={nodes.MaterialFBXASC032FBXASC0352142171859.geometry} material={materials.MaterialFBXASC032FBXASC0352142171859} />
          </group>
          <mesh geometry={nodes.MaterialFBXASC032FBXASC0352142172393.geometry} material={materials.MaterialFBXASC032FBXASC0352142172393} position={[1.936, 11.653, -18.202]} rotation={[-0.262, 0, 0]} scale={0.28} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/laptop.gltf')