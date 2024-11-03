import selfMini from '../assets/self-mini.png';
import rufflesGif from '../assets/ruffles.gif';
import Divider from '../components/Divider.tsx';
import Button from '../hoc/Button.tsx';
import { BrandColor } from '../enums/BrandColor.enum.ts';
import { ButtonVariant } from '../enums/ButtonVariant.enum.ts';
import { useNavigate } from 'react-router-dom';
import Timeline from '../components/Timeline.tsx';
import { FaPaw } from 'react-icons/fa';
import { FaPuzzlePiece } from 'react-icons/fa6';
import { SiNintendoswitch } from 'react-icons/si';
import Footer from '../components/Footer.tsx';
import { motion } from 'framer-motion';

const Home = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="flex flex-col items-center justify-center pt-10 gap-5 mt-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <motion.div
        className="w-3/4 flex flex-col lg:flex-row justify-between items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <h1 className="font-semibold text-lg text-start">
          Hello, I'm a{' '}
          <span className="font-mono text-primary">
            Junior JavaScript Developer
          </span>
          <br />
          based in Plovdiv, Bulgaria!
        </h1>
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-32 rounded-full ring ring-offset-2">
            <img src={selfMini} />
          </div>
        </div>
      </motion.div>
      <Divider value="Work" />
      <motion.div
        className="w-3/4 text-justify"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <p>
          &emsp; Still early in my developer journey, I'm a{' '}
          <i>pragmatic learner</i> who thrives when my head, heart, and hands
          work in harmony to solve real-world problems. After nearly 4 years in
          customer care within the hosting services field, as well as working as
          a freelancer, I've gained valuable experience in researching, solving
          technical challenges, communication, adaptability, and discipline.
          Recently graduated from Telerik Academy, I'm passionate about building
          digital services with the goal of mastering JavaScript.
        </p>
      </motion.div>
      <Button
        color={BrandColor.PRIMARY}
        variant={ButtonVariant.PRIMARY}
        handleClick={() => navigate('/projects')}
      >
        My Portfolio &rarr;
      </Button>
      <Divider value="Relevant Bio" />
      <motion.div
        className="w-3/4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <Timeline />
      </motion.div>
      <Divider value="I ♥" />
      <motion.div
        className="w-3/4 text-justify"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <ul>
          <li className="flex gap-2 items-center">
            <FaPaw />{' '}
            <p>
              Hiking with my cocker spaniel,{' '}
              <div className="dropdown dropdown-top dropdown-left md:dropdown-hover">
                <span className="text-primary cursor-pointer">Ruffles</span>
                <div
                  tabIndex={0}
                  className="dropdown-content card card-compact text-primary-content z-[1] w-60 p-1"
                >
                  <div className="card-body">
                    <img
                      src={rufflesGif}
                      alt="cocker spaniel eating a cherry"
                      className="shadow-md rounded-3xl"
                    />
                  </div>
                </div>
              </div>
            </p>
          </li>
          <li className="flex gap-2 items-center">
            <FaPuzzlePiece />{' '}
            <p>Learning skill toys, solving Jigsaw puzzles & Brain teasers </p>
          </li>
          <li className="flex gap-2 items-center">
            <SiNintendoswitch />{' '}
            <p>
              Playing board games & couch co-op games with friends on the
              Nintendo Switch
            </p>
          </li>
        </ul>
      </motion.div>
      <Footer />
    </motion.div>
  );
};

export default Home;
