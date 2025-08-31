import clsx, { ClassValue } from 'clsx'

/**
 * Utility function for conditionally joining class names
 * Wrapper around clsx for consistent usage across the app
 */
export const cn = (...inputs: ClassValue[]) => {
  return clsx(inputs)
}

export { clsx }
export default cn