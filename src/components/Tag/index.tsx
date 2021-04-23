import { FC } from 'react'
import styles from './style.module.scss'

const Tag: FC = ({ children }) => {
  return <span className={styles.container}>{children}</span>
}

export default Tag
