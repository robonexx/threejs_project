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
                                      handleClick={() => {
                                          
                                      }}
                                  />
                              ))}
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
                            isActive=""
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