import { motion, AnimatePresence } from "framer-motion"
import { useSnapshot } from "valtio"

import state from '../store'

import { 
    headContainerAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion'
import { CustomBtn } from "../components"

const Home = () => {
    const snap = useSnapshot(state)

  return (
      <AnimatePresence>
          {snap.intro && (
              <motion.section className="home" {...slideAnimation('left')}>
                  <motion.header {...slideAnimation('down')}>
                      <img 
                          src='./threejs.png'
                          alt='logo'
                          className="w-8 h-8 object-contain"
                      />
                  </motion.header>
                  <motion.div className="home-content"
                   {...headContainerAnimation}
                  >
                      <motion.div {...headTextAnimation}>                      
                      </motion.div>                      
                      <h1 className="head-text text-shadow">
                          LET´S <br className="xl:block hidden" /> A GOOO!
                      </h1>
                      <motion.div className="flex-col gap-5" {...headContainerAnimation}>
                          <p className="max-w-md font-normal text-black text-base">
                              Create your unique & exclusive t-shirt with our brand-new 3D customization tool. <strong>Unleash your imagination</strong>{" "}
                              & define your style.
                          </p>
                          <CustomBtn
                              title="Customize"
                              type="filled"
                              handleClick={() => state.intro = false}
                              customStyle="w-fit px-4 py-2.5 font-bold text-sm"
                          />
                        </motion.div>
                  </motion.div>
                  <motion.div {...headTextAnimation}>
                                            
                  </motion.div>
              </motion.section>
          )}
    </AnimatePresence>
  )
}

export default Home