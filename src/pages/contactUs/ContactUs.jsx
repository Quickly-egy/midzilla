import React from 'react';
import ContactHeader from '../../components/pagesComponent/contact/ContactHeader/ContactHeader';
import ContactInfo from '../../components/pagesComponent/contact/ContactInfo/ContactInfo';
import ContactForm from '../../components/pagesComponent/contact/ContactForm/ContactForm';
import Map from '../../components/pagesComponent/contact/Map/Map';
import styles from './contact.module.css';

const ContactUs = () => {
  return (
    <div className={styles.contactPage}>
      <ContactHeader />
      <div className={`${styles.mainContent} container`}>
        <ContactInfo />
        <div className={styles.formAndMap}>
          <div className={styles.formWrapper}>
            <ContactForm />
          </div>
          <div className={styles.mapWrapper}>
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;