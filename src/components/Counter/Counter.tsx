// import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { RootState, AppDispatch } from "@/store/store"
import { increment, decrement, setValue } from "@/store/slices/counterSlice"

import Button from '@/components/Button/Button'
import styles from './Counter.module.scss'

const Counter: React.FC = () => {
    //   const [count, setCount] = useState(0)
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch<AppDispatch>()

    //   const increment = () => setCount(prev => prev + 1)
    //   const decrement = () => setCount(prev => prev - 1)
    //   const reset = () => setCount(0)
    const incrementHandler = (): void => { dispatch(increment()); }
    const decrementHandler = (): void => { dispatch(decrement()); }
    const resetHandler = (): void => { dispatch(setValue(0)); }

    return (
        <div className={styles.counter}>
        <h3 className={styles.title}>Counter Example</h3>
        <div className={styles.display}>
            <span className={styles.count}>{count}</span>
        </div>
        <div className={styles.controls}>
            <Button onClick={decrementHandler} variant="outline" size="sm">
            -
            </Button>
            <Button onClick={resetHandler} variant="secondary" size="sm">
            Reset
            </Button>
            <Button onClick={incrementHandler} variant="primary" size="sm">
            +
            </Button>
        </div>
        </div>
    )
}

export default Counter