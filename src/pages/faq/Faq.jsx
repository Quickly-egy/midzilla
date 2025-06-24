import React, { useState, useMemo } from 'react';
import FaqHeader from '../../components/pagesComponent/faq/FaqHeader/FaqHeader';
import FaqSidebar from '../../components/pagesComponent/faq/FaqSidebar/FaqSidebar';
import FaqList from '../../components/pagesComponent/faq/FaqList/FaqList';
import { faqData, faqCategories } from '../../data/faqData';
import styles from './faq.module.css';

const Faq = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredFaqs = useMemo(() => {
    if (activeCategory === 'All') {
      return faqData;
    }
    return faqData.filter((faq) => faq.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className={styles.faqPage}>
      <FaqHeader />
      <div className={`${styles.mainContent} container`}>
        <aside className={styles.sidebarWrapper}>
          <FaqSidebar
            categories={faqCategories}
            activeCategory={activeCategory}
            onCategoryClick={setActiveCategory}
          />
        </aside>
        <main className={styles.faqListWrapper}>
          <FaqList faqs={filteredFaqs} />
        </main>
      </div>
    </div>
  );
};

export default Faq;