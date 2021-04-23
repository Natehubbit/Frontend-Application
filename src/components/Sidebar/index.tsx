import { FC } from 'react'
import { useHistory } from 'react-router-dom'
import useDevice from '../../hooks/useDevice'
import styles from './style.module.scss'

interface SidebarProps {
  color: string
}

const Sidebar: FC<SidebarProps> = ({ color }) => {
  const { push } = useHistory()
  const device = useDevice()
  const onNav = (route: string) => {
    push(route)
  }
  return device === 'xs'
    ? null
    : (
    <div className={styles.container}>
      <ul className={styles.menu}>
        <li
          style={{ color }}
          onClick={() => onNav('/')}
          role="button"
          className={styles.menuItem}
        >
          Main Page
        </li>
        <li
          style={{ color }}
          onClick={() => onNav('/product')}
          role="button"
          className={styles.menuItem}
        >
          Product
        </li>
      </ul>
    </div>
      )
}

export default Sidebar
