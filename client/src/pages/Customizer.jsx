import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'

import config from '../config/config'
import state from '../store'
import { download } from '../assets'
import { downloadCanvasToImage, reader } from '../config/helpers'
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants'
import { fadeAnimation, slideAnimation } from '../config/motion'
import { CustomBtn, AIPicker, ColorPicker, FilePicker, Tab } from '../components'

const Customizer = () => {
    const snap = useSnapshot(state)
    const [file, setFile] = useState('')
    const [prompt, setPrompt] = useState('')
    const [activeImg, setActiveImg] = useState(false)
    const [activeEditorTab, setActiveEditorTab] = useState('')
    const [activeFilterTab, setActiveFilterTab] = useState({
        logoShirt: true,
        stylishShirt: false
    })
    // show tab content depending on active tab
    const tabContentSwitch = () => {
        switch (activeEditorTab) {
            case "colorpicker":
                return <ColorPicker />
            case 'filepicker':
                return <FilePicker />
            case 'aipicker':
                return <AIPicker />
                default:
                return null;
        }
    }

  return (
      <AnimatePresence>
          {!snap.intro && (
              <>
                  <motion.div className="absolute top-0 left-0 z-10"
                  key="custom"
                      {...slideAnimation('left')}
                  >
                      <div className='flex items-center min-h-screen'>
                          <div className='editortabs-container tabs'>
                              {EditorTabs.map((tab) => (
                                  <Tab
                                      key={tab.name}
                                      tab={tab}
                                      handleClick={() => setActiveEditorTab(tab.name)}
                                  />
                              ))}
                              {tabContentSwitch()}
                          </div>
                      </div>                      
                  </motion.div>
                  <motion.div className='absolute z-10 top-5 right-5'>
                      <CustomBtn
                          type="filled"
                          title="Go back"
                          handleClick={() => state.intro = true}
                          customStyle="w-fit px-4 py-2.5 font-bold text-sm"
                      />
                  </motion.div>
                  <motion.div className='filtertabs-container'
                  {...slideAnimation('up')}
                  >
                    {FilterTabs.map((tab) => (
                            <Tab
                            key={tab.name}
                            tab={tab}
                            isFilterTab
                            isActive
                                handleClick={() => {
                                    
                                }}
                            />
                        ))}
                  </motion.div>
              </>
          )}
          
    </AnimatePresence>
  )
}

export default Customizer