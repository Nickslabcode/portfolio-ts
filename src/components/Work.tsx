import Button from '../hoc/Button';
import { BrandColor } from '../enums/BrandColor.enum';
import { ButtonVariant } from '../enums/ButtonVariant.enum';
import Divider from './Divider';
import { useNavigate } from 'react-router-dom';
import MotionContainer from '../hoc/MotionContainer';

const Work = () => {
  const navigate = useNavigate();

  return (
    <>
      <Divider value="Work" />
      <MotionContainer className="w-3/4 text-justify">
        <p>
          &emsp; Through hard work and curiosity, I've journeyed to where I am
          today. I've gained valuable experience in researching, solving
          technical challenges, communication, adaptability, and discipline.
          Recently graduated from Telerik Academy, I'm passionate about building
          digital services with the goal of mastering JavaScript. As you explore
          my portfolio, you'll see how my mind, heart, and hands work in harmony
          to solve real-world problems.
        </p>
      </MotionContainer>
      <Button
        color={BrandColor.PRIMARY}
        variant={ButtonVariant.PRIMARY}
        handleClick={() => navigate('/projects')}
      >
        My Portfolio &rarr;
      </Button>
    </>
  );
};

export default Work;
