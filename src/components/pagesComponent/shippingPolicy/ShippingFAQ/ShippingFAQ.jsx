import React, { useState } from 'react';
import AccordionItem from '../AccordionItem/AccordionItem';
import { shippingFAQ } from '../../../../data/shippingData';
import styles from './ShippingFAQ.module.css';

const ShippingFAQ = () => {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className={`${styles.faqWrapper} section_style`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className='section_title'>Frequently Asked Questions</h2>
        </div>
        <div className={styles.faqList}>
          {shippingFAQ.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openId === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShippingFAQ; 