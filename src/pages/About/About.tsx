import { Link } from 'react-router-dom'
import Button from '@/components/Button/Button'
import styles from './About.module.scss'

import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { RootState, AppDispatch } from "@/store/store"
import { fetchUser } from "@/store/slices/userSlice"

const About = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { data, status, error } = useSelector((state: RootState) => state.user)

  useEffect(() => {
    dispatch(fetchUser(1)) // fetch user with id=1 on mount
  }, [dispatch])

  if (status === "loading") return <p>Loading...</p>
  if (status === "failed") return <p>Error: {error}</p>

  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <h1 className={styles.title}>About This Scaffold</h1>

        {data && (
          <p>
            Hello {data.name}, your email is {data.email}.
          </p>
        )}
        
        <div className={styles.content}>
          <p className={styles.description}>
            This is a production-ready React scaffold built with modern tools and best practices.
            It includes everything you need to start building scalable React applications.
          </p>

          <div className={styles.techStack}>
            <h2>Technology Stack</h2>
            <div className={styles.grid}>
              <div className={styles.card}>
                <h3>Frontend</h3>
                <ul>
                  <li>React 18</li>
                  <li>TypeScript</li>
                  <li>React Router</li>
                </ul>
              </div>
              <div className={styles.card}>
                <h3>Styling</h3>
                <ul>
                  <li>SCSS Modules</li>
                  <li>CSS Variables</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
              <div className={styles.card}>
                <h3>Development</h3>
                <ul>
                  <li>Vite Build Tool</li>
                  <li>Hot Module Replacement</li>
                  <li>Path Aliases</li>
                </ul>
              </div>
              <div className={styles.card}>
                <h3>Quality</h3>
                <ul>
                  <li>Vitest Testing</li>
                  <li>ESLint + Prettier</li>
                  <li>Git Hooks</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.actions}>
            <Link to="/">
              <Button variant="primary">Back to Home</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About