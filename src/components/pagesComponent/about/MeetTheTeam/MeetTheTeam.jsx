import React from 'react';
import TeamMemberCard from '../TeamMemberCard/TeamMemberCard';
import { teamMembers } from '../../../../data/aboutData';
import styles from './MeetTheTeam.module.css';

const MeetTheTeam = () => {
  return (
    <div className={`${styles.meetTheTeam} container section_style`}>
      <div className={styles.header}>
        <h2 className='section_title'>Meet the Team</h2>
        <p className={styles.subtitle}>The passionate gamers behind Modzilla.</p>
      </div>
      <div className={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <TeamMemberCard
            key={index}
            name={member.name}
            title={member.title}
            imageUrl={member.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default MeetTheTeam; 