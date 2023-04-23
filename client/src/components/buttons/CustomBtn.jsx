import React from 'react'
import state from '../../store'
import { useSnapshot } from 'valtio'

const CustomBtn = ({ title, customStyle, type, handleClick }) => {
        const snap = useSnapshot(state)
        const  variant = (type) => {
            if (type === 'filled') {
                return {
                    backgroundColor: state.bg,
                  color: state.color
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