import { useEffect, useRef, useState } from 'react'

export default function ({ handler, excludeContainerIds, excludeQuerySelectors }) {
    const wrappedComponent = useRef(null)
    const [excludeContainers, setExcludeContainers] = useState([])

    const checkIfExistInExcludeDoms = (event) => {
        for (let index = 0; index < excludeContainers.length; index++) {
            const element = excludeContainers[index];
            if (element && typeof element.contains === 'function' && element.contains(event.target)) {
                return false;
            }
        }
        return true;
    }

    function handleClickOutside(event) {
        if (wrappedComponent && wrappedComponent.current && !wrappedComponent.current.contains(event.target) && checkIfExistInExcludeDoms(event)) {
            handler(event);
        }
    }
    useEffect(() => {
        let containers = []
        excludeContainerIds && excludeContainerIds.forEach(id => {
            const container = document.getElementById(id)
            if (container) {
                containers.push(container)
            }
        });
        excludeQuerySelectors && excludeQuerySelectors.forEach(selector => {
            const container = document.querySelector(selector)
            if (container) {
                containers.push(container)
            }
        });
        setExcludeContainers(containers)
    }, [])

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