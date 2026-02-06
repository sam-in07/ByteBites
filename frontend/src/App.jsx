import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { StoreProvider } from './Context/StoreContext'

const App = () => {
  return (
    <StoreProvider>
      <div className='app'>
        <Navbar />
      </div>
    </StoreProvider>
  )
}

export default App
