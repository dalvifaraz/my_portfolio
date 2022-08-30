import React from 'react';
import './about.css';
import ME from '../../assets/me1bg.png';
import ME2 from '../../assets/me3.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know!</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME2} alt='about-me' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__cards-icon' />
              <h5>Experience</h5>
              <small>1+ Year Working</small>
            </article>
            <article className='about__card'>
              <FiUser className='about__cards-icon' />
              <h5>Clients</h5>
              <small>100+ World Wide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__cards-icon' />
              <h5>Projects</h5>
              <small>90+ Completed Project</small>
            </article>
          </div>
          <p>para about me</p>
          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
