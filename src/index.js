import React, { useState } from 'react';
import { render } from 'react-dom';

import withClickOutside from './withClickOutside'
const App = () => {
    const [isOpen, setIsOpen] = useState(false)
    const ref = withClickOutside(() => {
        setIsOpen(!isOpen)
    })
    return <h1 ref={ref}>{isOpen ? "open" : "close"}</h1>
}

const rootElement = document.getElementById('app');
render(<App />, rootElement);