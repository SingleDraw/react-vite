import { useState } from 'react'
import Button from '@/components/Button/Button'
import Counter from '@/components/Counter/Counter'
import styles from './Home.module.scss'
import { Link } from 'react-router-dom'

const Home = () => {
  const [message, setMessage] = useState(
    'Welcome to React + TypeScript + Vite + SCSS!'
  )

  const handleButtonClick = () => {
    setMessage('Button clicked! HMR is working perfectly!')
  }

  return (
    <div className={styles.home}>
      <header className={styles.header}>
        <h1 className={styles.title}>React TypeScript Vite SCSS</h1>
        <p className={styles.message}>{message}</p>
        <Link to="/about" className={styles.link}>
          Go to About Page
        </Link>
      </header>

      <main className={styles.main}>
        <div className={styles.section}>
          <h2>Components Demo</h2>
          <Button onClick={handleButtonClick} variant="primary">
            Test HMR
          </Button>
          <Counter />
        </div>

        <div className={styles.features}>
          <h3>Features Included</h3>
          <ul>
            <li>Vite for fast development and builds</li>
            <li>Hot Module Replacement (HMR) enabled</li>
            <li>TypeScript for type safety</li>
            <li>SCSS modules for scoped styling</li>
            <li>React Router for client-side routing</li>
            <li>Vitest for unit testing</li>
            <li>Prettier for code formatting</li>
            <li>ESLint for code quality</li>
            <li>Husky for git hooks</li>
            <li>Path aliases for clean imports</li>
          </ul>
        </div>
      </main>
    </div>
  )
}

export default Home