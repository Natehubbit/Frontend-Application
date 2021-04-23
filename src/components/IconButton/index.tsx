import { FC } from 'react'
import styles from './style.module.scss'

interface IconButtonProps {
  onClick: () => void
}

const IconButton: FC<IconButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={styles.container}>
      {children}
    </button>
  )
}

export default IconButton
