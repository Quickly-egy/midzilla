import React from 'react';
import styles from './AccordionItem.module.css';
import { FaChevronDown } from 'react-icons/fa';

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`${styles.accordionItem} ${isOpen ? styles.open : ''}`}>
      <button className={styles.accordionHeader} onClick={onClick}>
        <span className={styles.question}>{question}</span>
        <span className={styles.icon}><FaChevronDown /></span>
      </button>
      <div className={styles.accordionContent}>
        <p className={styles.answer}>{answer}</p>
      </div>
    </div>
  );
};

export default AccordionItem; 