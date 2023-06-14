/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from '../store';
import { CustomButton } from '../components';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from '../config/motion';

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation('down')}>
            <img
              src="./threed-1.png"
              alt="logo"
              className="w-28 h-20 object-contain"
            />
          </motion.header>

          {/* <motion.div
            {...headContainerAnimation}
            className="hidden md:flex -ml-64 -mb-[650px] -z-50"
          >
            <img
              src="./glob.png"
              alt="glob"
              className="w-fit h-fit object-contain"
            />
          </motion.div> */}

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                <span className="text-black title">LET'S</span>{' '}
                <br className="block" /> DO IT.
              </h1>
              <div className="bg-[#89630c] h-[.25px] w-full" />
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5 mt-60 md:mt-20"
            >
              <p className="desc max-w-md text-[#aa7b0f] font-semibold text-base mt-5">
                Create your unique and exclusive shirt with our new 3D branding
                tool. <strong>Find your style and 🤩</strong>
              </p>

              <CustomButton
                type="filled"
                title="Customize-It"
                handleClick={() => (state.intro = false)}
                customStyle="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>

            <motion.div className="-ml-40 -mb-20" {...headTextAnimation}>
              <div className="space-y-4">
                <div className="bg-[#89630c] h-[.25px] max-w-sm" />
                <div className="bg-[#89630c] h-[.25px] max-w-md" />
                <div className="bg-[#89630c] h-[.25px] max-w-2xl" />
              </div>
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
