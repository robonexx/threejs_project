/* eslint-disable react/prop-types */
import React from 'react'

import CustomBtn from './buttons/CustomBtn'

const FilePicker = ({file, setFile, readFile}) => {
  return (
      <div className='filepicker-container'>
          <div className='flex-1 flex flex-col'>
              <input
                type="file"
                  id='file-upload'
                  accept="image/*"
                  onChange={(e) => setFile(e.target.files[0])}
              />
              <label
                  htmlFor="file-upload"
                  className='filepicker-label'>
                    Upload File
              </label>
              <p className='mt-2 text-gray-500 text-xs truncate'>
                      {file === '' ? 'No file selected' : file.name}
                  </p>
          </div>
          <div className='mt-4 flex flex-wrap gap-3'>
              <CustomBtn
                  type="outline"
                  title="Logo"
                  handleClick={() => readFile('logo')}
              />
              <CustomBtn
                  type="filled"
                  title="Full"
                  handleClick={() => readFile('full')}
                  customStyle="text-ts"
              />
          </div>
    </div>
  )
}

export default FilePicker