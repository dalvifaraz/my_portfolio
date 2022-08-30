import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';

const Social = () => {
  return (
    <div className='header__social'>
      <a href='https://linkedin.com' target='_blank'>
        <FaLinkedin />
      </a>
      <a href='https://github.com' target='_blank'>
        <AiFillGithub />
      </a>
    </div>
  );
};

export default Social;
