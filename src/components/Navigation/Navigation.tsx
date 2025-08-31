import { Link, useLocation } from 'react-router-dom'
import clsx from 'clsx'
import styles from './Navigation.module.scss'

const Navigation = () => {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
  ]

  return (
    <nav className={styles.navigation}>
      <div className={styles.brand}>
        <Link to="/" className={styles.brandLink}>
          React TS Scaffold
        </Link>
      </div>
      <ul className={styles.navList}>
        {navItems.map(item => (
          <li key={item.path} className={styles.navItem}>
            <Link
              to={item.path}
              className={clsx(styles.navLink, {
                [styles.active]: location.pathname === item.path,
              })}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation