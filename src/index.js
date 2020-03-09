import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

import withClickOutside from './withClickOutside'
const App = () => {
    const [isOpen, setIsOpen] = useState(false)
    const ref = withClickOutside({
        handler: () => {
            setIsOpen(!isOpen)
        },
        excludeContainerIds: ["test1", "test2", "test3"],
        excludeQuerySelectors: ["div.test-class", "div.test-class1"],
        isInitContainersAllTimes: true
    })
    useEffect(() => {
        let container = document.getElementById('test2')
        if (isOpen) {
            if (container) return
            container = document.createElement('div')
            container.id = "test2"
            let button = document.createElement('button')
            button.innerText = "test2"
            container.appendChild(button)
            document.body.appendChild(container)
        } else {
            if (container) {
                document.body.removeChild(container)
            }
        }

    })
    return <h1 ref={ref}>{isOpen ? "open" : "close"}</h1>
}

const rootElement = document.getElementById('app');
render(<App />, rootElement);