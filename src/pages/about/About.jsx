import React from 'react';
import AboutHeader from '../../components/pagesComponent/about/AboutHeader/AboutHeader';
import OurStory from '../../components/pagesComponent/about/OurStory/OurStory';
import OurMission from '../../components/pagesComponent/about/OurMission/OurMission';
import MeetTheTeam from '../../components/pagesComponent/about/MeetTheTeam/MeetTheTeam';
import styles from './about.module.css';

const About = () => {
  return (
    <div className={styles.aboutPage}>
      <AboutHeader />
      <OurStory />
      <OurMission />
      <MeetTheTeam />
    </div>
  );
};

export default About;