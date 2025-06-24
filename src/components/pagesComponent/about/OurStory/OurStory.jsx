import React from 'react';
import styles from './OurStory.module.css';

const OurStory = () => {
  return (
    <div className={`${styles.ourStory} container section_style`}>
      <div className={styles.storyContent}>
        <h2 className='section_title'>Our Story</h2>
        <p>
          Founded in 2022 by a group of passionate gamers, Modzilla started with a simple mission: to make top-tier gaming equipment accessible to everyone. We were tired of the compromise between quality and price, and we knew others were too. From a small garage startup to a leading online retailer, our commitment to the gaming community has been the driving force behind our growth.
        </p>
        <p>
          We believe that the right gear can transform a gaming session from ordinary to legendary. That's why we meticulously select every product we sell, ensuring it meets our high standards for performance, durability, and design.
        </p>
      </div>
      <div className={styles.storyImage}>
        <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Our team working" />
      </div>
    </div>
  );
};

export default OurStory; 