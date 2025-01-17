import Footer from '../components/Footer.tsx';
import Hero from '../components/Hero.tsx';
import Work from '../components/Work.tsx';
import Hobbies from '../components/Hobbies.tsx';
import MotionContainer from '../hoc/MotionContainer.tsx';
import Bio from '../components/Bio.tsx';

const Home = () => {
  return (
    <MotionContainer className="flex flex-col items-center justify-center pt-10 gap-5 mt-10">
      <Hero />
      <Work />
      <Bio />
      <Hobbies />
      <Footer />
    </MotionContainer>
  );
};

export default Home;
