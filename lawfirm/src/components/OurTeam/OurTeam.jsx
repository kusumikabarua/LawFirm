import React from 'react';
import Section from '../Section/Section';
import { team } from '../../constants/constants';
import styles from "./OurTeam.module.css"

const OurTeam = () => {
  return (
    <div className={styles.wrapper}><h1>Our Team</h1><Section data={team} type="team"/></div>
  )
}

export default OurTeam