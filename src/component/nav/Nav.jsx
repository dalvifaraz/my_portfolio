import React, { useState } from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import { BiBookAlt, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceFill } from 'react-icons/ri';

const Nav = () => {
  const [activeNew, setActiveNew] = useState('#');
  return (
    <nav>
      <a
        href='#'
        onClick={() => setActiveNew('#')}
        className={activeNew === '#' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>
      <a
        href='#about'
        onClick={() => setActiveNew('#about')}
        className={activeNew === '#about' ? 'active' : ''}
      >
        <FiUser />
      </a>
      <a
        href='#experience'
        onClick={() => setActiveNew('#experience')}
        className={activeNew === '#experience' ? 'active' : ''}
      >
        <BiBookAlt />
      </a>
      <a
        href='#portfolio'
        onClick={() => setActiveNew('#portfolio')}
        className={activeNew === '#portfolio' ? 'active' : ''}
      >
        <RiServiceFill />
      </a>
      <a
        href='#contact'
        onClick={() => setActiveNew('#contact')}
        className={activeNew === '#contact' ? 'active' : ''}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
