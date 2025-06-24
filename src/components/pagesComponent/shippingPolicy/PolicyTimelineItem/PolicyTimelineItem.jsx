import React from "react";
import styles from "./PolicyTimelineItem.module.css";

// eslint-disable-next-line no-unused-vars
const PolicyTimelineItem = ({ icon: Icon, title, description, isLast }) => {
  return (
    <div className={styles.timelineItem}>
      <div className={styles.timelineConnector}>
        <div className={styles.iconWrapper}>
          <Icon />
        </div>
        {!isLast && <div className={styles.line}></div>}
      </div>
      <div className={styles.timelineContent}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default PolicyTimelineItem;
