import React from 'react';
import selfMini from '../assets/self-mini.png';
import Divider from '../components/Divider.tsx';
import Button from '../hoc/Button.tsx';
import { BrandColor } from '../enums/BrandColor.enum.ts';
import { ButtonVariant } from '../enums/ButtonVariant.enum.ts';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center pt-10 gap-5">
      <div className="w-3/4 flex justify-between items-center gap-4">
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
      </div>
      <Divider value="Work" />
      <div className="w-3/4 text-justify">
        <p>
          Still early in my developer journey, I'm a <i>pragmatic learner</i>{' '}
          who thrives when my head, heart, and hands work in harmony to solve
          real-world problems. After nearly 4 years in customer care within the
          hosting services field, as well as working as a freelancer, I've
          gained valuable experience in researching, solving technical
          challenges, communication, adaptability, and discipline. I'm
          passionate about building digital services and consider myself a
          jack-of-all-trades, with the goal of mastering JavaScript.
        </p>
      </div>
      <Button
        color={BrandColor.PRIMARY}
        variant={ButtonVariant.PRIMARY}
        handleClick={() => navigate('/projects')}
      >
        My Portfolio &rarr;
      </Button>
    </div>
  );
};

export default Home;
