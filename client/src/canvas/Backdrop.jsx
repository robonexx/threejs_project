/* eslint-disable react/prop-types */
import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'

const Backdrop = () => {
    const shadows = useRef()
  return (
      <AccumulativeShadows
        ref={shadows}
        temporal
        frames={60}
        alphaTest={0.85}
        scale={10}
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, -0.14]}
      >
          <RandomizedLight
              amount={4}
              radius={9}
              intensity={0.55}
              ambient={0.35}
              position={[4, 6, -5]}
          />
          <RandomizedLight
          amount={4}
          radius={9}
          intensity={0.55}
          ambient={0.35}
          position={[-4,-6, 50]}
          />
    </AccumulativeShadows>
  )
}

export default Backdrop