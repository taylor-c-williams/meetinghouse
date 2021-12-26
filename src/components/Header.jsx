import React from 'react';
import styles from './styles/header.module.css';

export default function Header() {
  return (
    <div>
      <header>We Deserve a Safe Place to Live!</header>
      <span className={styles.subhead}>
        Petition for Meetinghouse On-Site Security
      </span>
    </div>
  );
}
