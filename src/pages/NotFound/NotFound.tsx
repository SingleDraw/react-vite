import { Link } from 'react-router-dom'
import Button from '@/components/Button/Button'
import styles from './NotFound.module.scss'

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>404</h1>
          <h2 className={styles.subtitle}>Page Not Found</h2>
          <p className={styles.description}>
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className={styles.actions}>
            <Link to="/">
              <Button variant="primary">Go Home</Button>
            </Link>
            <Link to="/about">
              <Button variant="outline">Learn More</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound