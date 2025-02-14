import selfMini from '../assets/self-mini.jpg';
import MotionContainer from '../hoc/MotionContainer';

const Hero = () => {
  return (
    <MotionContainer className="w-3/4 flex flex-col lg:flex-row justify-between items-center gap-4">
      <h1 className="font-semibold text-lg text-start">
        Hello, I'm a{' '}
        <span className="font-mono text-primary">
          Junior JavaScript Developer
        </span>
        <br />
        based in Plovdiv, Bulgaria!
      </h1>
      <div className="avatar">
        <div className="ring-primary ring-offset-base-100 w-60 rounded-full ring ring-offset-2">
          <img src={selfMini} />
        </div>
      </div>
    </MotionContainer>
  );
};

export default Hero;
