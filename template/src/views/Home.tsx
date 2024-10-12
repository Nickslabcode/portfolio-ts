import React from 'react';
import selfMini from '../assets/self-mini.png';
import Divider from '../components/Divider.tsx';
const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-10 gap-5">
      <div className="w-5/6 flex justify-between items-center gap-4">
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
    </div>
  );
};

export default Home;
