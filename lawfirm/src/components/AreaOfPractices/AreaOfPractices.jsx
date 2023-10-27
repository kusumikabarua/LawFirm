import React from 'react';
import styles from './AreasOfPractices.module.css';
import Section from '../Section/Section';
import { practices } from '../../constants/constants';

const AreaOfPractices = () => {
    return (
        <div className={styles.wrapper}><h1>Area of Practices</h1><Section data ={practices} type="areaOfPractices"/></div>
      )
}

export default AreaOfPractices