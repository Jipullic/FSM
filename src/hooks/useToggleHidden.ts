import { useCallback, useMemo, useRef, useState, type RefObject } from 'react'

type Return<T extends HTMLElement> = [RefObject<T>, () => void, boolean]

/**
 * A hook that provides a reference and a function to toggle the 'hidden' class on the referenced element.
 *
 * @return {Array} An array containing a reference object and a function to toggle the 'hidden' class.
 */
function useToggleHidden<T extends HTMLElement>(
  isDefaultHidden = true
): Return<T> {
  const ref = useRef<T>(null)
  const [isHidden, setIsHidden] = useState(isDefaultHidden)

  const toggleHidden = useCallback(() => {
    if (ref && typeof ref === 'object' && 'current' in ref && ref.current) {
      ref.current.classList.toggle('hidden')
      setIsHidden(ref.current.classList.contains('hidden'))
    }
  }, [])

  return [ref, toggleHidden, isHidden]
}

export default useToggleHidden

/* 
old

export const toggleHidden = (ref: RefObject<any> | ForwardedRef<any>) => {
  if (ref && typeof ref === 'object' && 'current' in ref && ref.current)
    ref.current?.classList.toggle('hidden')
}
*/
