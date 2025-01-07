import Divider from './Divider';
import MotionContainer from '../hoc/MotionContainer';
import Timeline from './Timeline';

const Bio = () => {
  return (
    <>
      <Divider value="Relevant Bio" />
      <MotionContainer className="w-3/4">
        <Timeline />
      </MotionContainer>
    </>
  );
};

export default Bio;
