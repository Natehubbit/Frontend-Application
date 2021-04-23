import React from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import { useConfig } from '../../hooks/useConfig'
import styles from './style.module.scss'

const Home = () => {
  const { config } = useConfig()
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.body}>
        <Sidebar color={(config && config.mainColor) || ''} />
        <div className={styles.content}>
          <h3>Main Page</h3>
        </div>
      </div>
    </div>
  )
}

export default Home
