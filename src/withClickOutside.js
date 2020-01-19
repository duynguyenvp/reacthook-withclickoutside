import { useEffect, useRef } from 'react'

const withClickOutside = (handler) => {
    const wrappedComponent = useRef(null)

    function handleClickOutside(event) {
        if (wrappedComponent && wrappedComponent.current && !wrappedComponent.current.contains(event.target)) {
            handler(event);
        }
    }
    useEffect(() => {
        if (window.PointerEvent) {
            document.addEventListener('pointerdown', handleClickOutside)
        } else {
            document.addEventListener('mousedown', handleClickOutside)
            document.addEventListener('touchstart', handleClickOutside)
        }
        return () => {
            if (window.PointerEvent) {
                document.removeEventListener('pointerdown', handleClickOutside)
            } else {
                document.removeEventListener('mousedown', handleClickOutside)
                document.removeEventListener('touchstart', handleClickOutside)
            }
        }
    }, [handler]);
    return wrappedComponent;
}
export default withClickOutside