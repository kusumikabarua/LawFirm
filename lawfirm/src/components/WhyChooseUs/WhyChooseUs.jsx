import React from 'react';
import Section from '../Section/Section';
import { successRate } from '../../constants/constants';
import styles from "./WhyChooseUs.module.css"

const WhyChooseUs = () => {
  return (
    <div className={styles.wrapper}><h1>Why Choose us?</h1><Section data={successRate} type="whyChooseUs"/></div>
  )
}

export default WhyChooseUs