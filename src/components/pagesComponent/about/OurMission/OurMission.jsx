import React from 'react';
import styles from './OurMission.module.css';

const OurMission = () => {
  return (
    <div className={styles.ourMissionWrapper}>
      <div className={`${styles.ourMission} container section_style`}>
        <div className={styles.missionImage}>
          <img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Our mission visual" />
        </div>
        <div className={styles.missionContent}>
          <h2 className='section_title'>Our Mission & Vision</h2>
          <p>
            <strong>Mission:</strong> To empower every gamer with the highest quality gear and foster a global community united by a love for gaming. We are committed to exceptional customer service and providing a curated selection of products that deliver a competitive edge and an immersive experience.
          </p>
          <p>
            <strong>Vision:</strong> To be the world's most trusted and recognized brand in gaming e-commerce, known for our innovation, community engagement, and unwavering dedication to the player.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMission; 