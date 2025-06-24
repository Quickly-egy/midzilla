import React from 'react';
import styles from './Map.module.css';

const Map = () => {
  return (
    <div className={styles.mapContainer}>
      <iframe
        className={styles.mapFrame}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.287898869801!2d-122.4194154846813!3d37.77492957975871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c1c0e399b%3A0x6b8015f6a9f0f5b1!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1620707399589!5m2!1sen!2s"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        title="Google Maps Location"
      ></iframe>
    </div>
  );
};

export default Map; 