import React, { PropTypes } from 'react'
import MobileDetect from 'mobile-detect'
import './styles.css'

const App = ({ children }) => {
  const md = new MobileDetect(window.navigator.userAgent)
  const cls = md.is('iOS') ? 'ios' : md.is('AndroidOS') ? 'android' : ''

  return (
    <main className={cls}>
      <header>
        <h1>brmobi</h1>
      </header>
      {children}
      <footer>
        <p>&copy; 2017</p>
      </footer>
    </main>
  )
}

App.propTypes = {
  children: PropTypes.object.isRequired
}

export default App
