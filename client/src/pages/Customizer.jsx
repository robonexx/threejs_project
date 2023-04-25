/* eslint-disable no-empty */
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
                return <FilePicker
                    file={file}
                    setFile={setFile}
                    readFile={readFile}
                />
            case 'aipicker':
                return <AIPicker
                    prompt={prompt}
                    setPrompt={setPrompt}
                    activeImg={setActiveImg}
                    handleSubmit={handleSubmit}
                />
                default:
                return null;
        }
    }

    const handleSubmit = async (type) => {
        if (!prompt) return alert('Please enter a prompt');
        
        try {
            
        } catch (error) {
            alert(error)
        } finally {
            setActiveImg(false)
            setActiveEditorTab('')
        }
    }

    const handleDecals = (type, result) => {
        const decalType = DecalTypes[type];

        state[decalType.stateProperty] = result;
        if (!activeFilterTab[decalType.filterTab]) {
            handleActiveFilterTab(decalType.filterTab)
        }
    }

    const handleActiveFilterTab = (tabName) => {
        switch (tabName) {
            case "logoShirt":
                state.isLogoTexture = !activeFilterTab[tabName];
                break;
            case "stylishShirt":
                state.isFullTexture = !activeFilterTab[tabName];                                
                break;
            
            default:
                state.isLogoTexture = true;
                state.isFullTexture = false;
                
        }

        // after state change active filter tab
        setActiveFilterTab((prev) => {
            return {
                ...prev,
                [tabName]: !prev[tabName]
            }
        })
    }
    const readFile = (type) => {
        reader(file)
            .then((result) => {
                handleDecals(type, result);
                setActiveEditorTab('')
        })
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
                            isActive={activeFilterTab[tab.name]}
                                handleClick={() => handleActiveFilterTab(tab.name)}
                            />
                        ))}
                  </motion.div>
              </>
          )}
          
    </AnimatePresence>
  )
}

export default Customizer