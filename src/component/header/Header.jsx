import React from 'react';
import './header.css';
import ME from '../../assets/me1bg.png';
import Social from './Social';
import CTA from './CTA';

const Header = () => {
  return (
    <header id='#'>
      <div class='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Dalvi Faraz</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
        <div className='me'>
          <img src={ME} alt='me' />
        </div>
        <a href='#contact' className='scroll__down'>
          Scroll Down
        </a>
        <Social />
      </div>
    </header>
  );
};

export default Header;
