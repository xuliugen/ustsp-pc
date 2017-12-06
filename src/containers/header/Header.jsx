import React from 'react'
import logo from '../../logo.svg'
import styles from './styles.css'

const Header = () => (
  <header className={styles['header']}>
    <img src={logo} className={styles['logo']} alt="logo" />
    <h1 className={styles['title']}>Welcome to React</h1>
  </header>
)

export default Header
