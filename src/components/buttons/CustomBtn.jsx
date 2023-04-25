/* eslint-disable react/prop-types */
import React from 'react'
import state from '../../store'
import { useSnapshot } from 'valtio'
import { getContrastingColor } from '../../config/helpers'

const CustomBtn = ({ title, customStyle, type, handleClick }) => {
        const snap = useSnapshot(state)
        const  variant = (type) => {
            if (type === 'filled') {
                return {
                    backgroundColor: snap.color,
                  color: getContrastingColor(snap.color)
              }
            }
            if (type === 'outline') {
                return {
                    border: `1px solid ${getContrastingColor(snap.color)}`,
                    color: getContrastingColor(snap.color)
              }
            }
        }
        
  return (
      <button className={`px-4 py-3 flex-1 rounded-md mt-5 ${customStyle}`}
          style={variant(type)}
          onClick={handleClick}
      >
          {title}
    </button>
  )
}

export default CustomBtn