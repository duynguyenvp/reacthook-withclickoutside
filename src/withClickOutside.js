import { useEffect, useRef, useState } from 'react'

export default function ({ handler, excludeContainerIds, excludeQuerySelectors, isInitContainersAllTimes = false }) {
    const wrappedComponent = useRef(null)
    const [excludeContainers, setExcludeContainers] = useState([])

    const checkIfExistInExcludeDoms = (event) => {
        let containers = []
        if (isInitContainersAllTimes) {
            containers = findAllContainers();
        }
        else {
            containers = [...excludeContainers]
        }
        for (let index = 0; index < containers.length; index++) {
            const element = containers[index];
            if (element && typeof element.contains === 'function' && element.contains(event.target)) {
                return false;
            }
        }
        return true;
    }

    const handleClickOutside = (event) => {
        if (wrappedComponent && wrappedComponent.current && !wrappedComponent.current.contains(event.target) && checkIfExistInExcludeDoms(event)) {
            handler(event);
        }
    }

    const findAllContainers = () => {
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
        return containers
    }

    useEffect(() => {
        if (!isInitContainersAllTimes) {
            setExcludeContainers(findAllContainers())
        }
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