import React from 'react'
// backend comes from server side
import CustomBtn from './buttons/CustomBtn'


const AIPicker = ({prompt, setPrompt, activeImg, handleSubmit}) => {
  return (
    <div className='aipicker-container'>
      <textarea
        className='aipicker-textarea'
        placeholder='Ask ai...'
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <div className='flex flex-wrap gap-3'>
        {activeImg ? (
          <CustomBtn
            type="outline"
            title="Asking AI"
            customStyle="text-xs"
          />
        ) : (
            <>
          <CustomBtn
            type="outline"
            title="AI Logo"
            handleClick={() => handleSubmit('logo')}
            customStyle="text-xs"
          />
          <CustomBtn
            type="filled"
            title="AI Full"
            handleClick={() => handleSubmit('full')}
            customStyle="text-xs"
          />
            </>
            
        )
      
      }

      </div>
    </div>
  )
}

export default AIPicker