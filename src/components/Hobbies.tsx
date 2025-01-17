import { FaPaw, FaPuzzlePiece } from 'react-icons/fa';
import { SiNintendoswitch } from 'react-icons/si';
import Divider from './Divider';
import MotionContainer from '../hoc/MotionContainer';

const Hobbies = () => {
  return (
    <>
      <Divider value="Hobbies" />
      <MotionContainer className="w-3/4 text-justify">
        <ul className="flex flex-col gap-2">
          <li className="flex gap-2 items-center">
            <span>
              <FaPaw size={20} />
            </span>
            <div>Hiking with my cocker spaniel, Ruffles.</div>
          </li>
          <li className="flex gap-2 items-center">
            <span>
              <FaPuzzlePiece size={20} />
            </span>
            <p>Learning skill toys, solving Jigsaw puzzles & Brain teasers.</p>
          </li>
          <li className="flex gap-2 items-center">
            <span>
              <SiNintendoswitch size={20} />
            </span>
            <p>
              Playing board games & couch co-op games with friends on the
              Nintendo Switch.
            </p>
          </li>
        </ul>
      </MotionContainer>
    </>
  );
};

export default Hobbies;
