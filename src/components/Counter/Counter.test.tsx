import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Counter from './Counter'

describe('Counter', () => {
  it('renders counter with initial value of 0', () => {
    render(<Counter />)
    expect(screen.getByText('0')).toBeInTheDocument()
    expect(screen.getByText('Counter Example')).toBeInTheDocument()
  })

  it('increments count when + button is clicked', () => {
    render(<Counter />)
    const incrementButton = screen.getByRole('button', { name: '+' })
    
    fireEvent.click(incrementButton)
    expect(screen.getByText('1')).toBeInTheDocument()
    
    fireEvent.click(incrementButton)
    expect(screen.getByText('2')).toBeInTheDocument()
  })

  it('decrements count when - button is clicked', () => {
    render(<Counter />)
    const decrementButton = screen.getByRole('button', { name: '-' })
    
    fireEvent.click(decrementButton)
    expect(screen.getByText('-1')).toBeInTheDocument()
    
    fireEvent.click(decrementButton)
    expect(screen.getByText('-2')).toBeInTheDocument()
  })

  it('resets count when Reset button is clicked', () => {
    render(<Counter />)
    const incrementButton = screen.getByRole('button', { name: '+' })
    const resetButton = screen.getByRole('button', { name: 'Reset' })
    
    // Increment to 3
    fireEvent.click(incrementButton)
    fireEvent.click(incrementButton)
    fireEvent.click(incrementButton)
    expect(screen.getByText('3')).toBeInTheDocument()
    
    // Reset to 0
    fireEvent.click(resetButton)
    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('handles multiple operations correctly', () => {
    render(<Counter />)
    const incrementButton = screen.getByRole('button', { name: '+' })
    const decrementButton = screen.getByRole('button', { name: '-' })
    
    fireEvent.click(incrementButton) // 1
    fireEvent.click(incrementButton) // 2
    fireEvent.click(decrementButton) // 1
    
    expect(screen.getByText('1')).toBeInTheDocument()
  })
})