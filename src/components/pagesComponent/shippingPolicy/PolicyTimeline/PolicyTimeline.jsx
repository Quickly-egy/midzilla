import React from 'react';
import PolicyTimelineItem from '../PolicyTimelineItem/PolicyTimelineItem';
import { shippingPolicies } from '../../../../data/shippingData';
import styles from './PolicyTimeline.module.css';

const PolicyTimeline = () => {
  return (
    <div className='container section_style'>
      <div className={styles.timeline}>
        {shippingPolicies.map((policy, index) => (
          <PolicyTimelineItem
            key={index}
            icon={policy.icon}
            title={policy.title}
            description={policy.description}
            isLast={index === shippingPolicies.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default PolicyTimeline; 