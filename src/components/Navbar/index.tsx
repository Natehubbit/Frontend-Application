import { useState } from 'react'
import styles from './style.module.scss'
import { Menu } from 'react-feather'
import useDevice from '../../hooks/useDevice'
import { Link } from 'react-router-dom'
import { useConfig } from '../../hooks/useConfig'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const { loading, config } = useConfig()
  const device = useDevice()
  const isMobile = device === 'xs'
  const onToggleMenu = () => {
    setShowMenu(!showMenu)
  }
  const primaryColor = (config && config.mainColor) || 'white'
  return (
    <>
      <div className={styles.container} style={{ background: primaryColor }}>
        {!loading && (
          <div className={styles.logo}>
            <img height={20} alt="logo" src={config?.logo} />
          </div>
        )}
        {isMobile && (
          <button
            style={{ color: primaryColor }}
            onClick={onToggleMenu}
            className={styles.menuBtn}
          >
            <Menu />
          </button>
        )}
      </div>
      {isMobile && showMenu && (
        <div className={styles.menu}>
          <ul>
            <Link to="/">Main Page</Link>
            <Link to="/product">Product Page</Link>
          </ul>
        </div>
      )}
    </>
  )
}

export default Navbar
