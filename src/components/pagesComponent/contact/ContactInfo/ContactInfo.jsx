import React from 'react';
import styles from './ContactInfo.module.css';

const ContactInfo = () => {
  const infoItems = [
    {
      icon: '📍',
      title: 'Our Office',
      details: '123 Gaming Lane, Joystick City, 11111',
    },
    {
      icon: '✉️',
      title: 'Email Us',
      details: 'support@modzilla.com',
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: '+1 (123) 456-7890',
    },
     {
      icon: '🕒',
      title: 'Business Hours',
      details: 'Mon-Fri: 9am - 6pm',
    },
  ];

  return (
    <div className={styles.contactInfo}>
      {infoItems.map((item, index) => (
        <div key={index} className={styles.infoCard}>
          <div className={styles.icon}>{item.icon}</div>
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.details}>{item.details}</p>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo; 