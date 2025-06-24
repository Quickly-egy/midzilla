import React from 'react';
import styles from './TeamMemberCard.module.css';

const TeamMemberCard = ({ name, title, imageUrl }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt={name} className={styles.image} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.title}>{title}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard; 