import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggle = () => setIsDarkMode(!isDarkMode);
  const appStyle = {
    backgroundColor : isDarkMode? '#2e2e2e': '#fff',
    color : isDarkMode? '#d6d6d6' : '#000',
  }
  const buttonStyle = {
    backgroundColor: isDarkMode?'#d6d6d6':'#2e2e2e',
    color : isDarkMode?'':'#fff',
  }
  return (
    <div style={appStyle}>
      <h1>{isDarkMode? "Dark Mode": "Light Mode"}</h1>
      <button
        style={buttonStyle}
        onClick={toggle}>Switch to {isDarkMode? "Light Mode": "Dark Mode"}</button>
    </div>
  )
}

export default App
