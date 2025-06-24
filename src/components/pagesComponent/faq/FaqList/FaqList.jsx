import React, { useState } from 'react';
import AccordionItem from '../AccordionItem/AccordionItem';
import styles from './FaqList.module.css';

const FaqList = ({ faqs }) => {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className={styles.faqList}>
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openId === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default FaqList; 