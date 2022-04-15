import React from 'react'
import { createRoot } from 'react-dom/client';
import ApplicationFrame from './components/ApplicationFrame'
import './index.css'

let reactElement = document.getElementById('react-container') // eslint-disable-line no-undef

const root = createRoot(reactElement)
root.render(<ApplicationFrame />)
