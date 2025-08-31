import { useState } from 'react'
import Button from '@/components/Button/Button'
import styles from './Counter.module.scss'

const Counter: React.FC = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(prev => prev + 1)
  const decrement = () => setCount(prev => prev - 1)
  const reset = () => setCount(0)

  return (
    <div className={styles.counter}>
      <h3 className={styles.title}>Counter Example</h3>
      <div className={styles.display}>
        <span className={styles.count}>{count}</span>
      </div>
      <div className={styles.controls}>
        <Button onClick={decrement} variant="outline" size="sm">
          -
        </Button>
        <Button onClick={reset} variant="secondary" size="sm">
          Reset
        </Button>
        <Button onClick={increment} variant="primary" size="sm">
          +
        </Button>
      </div>
    </div>
  )
}

export default Counter