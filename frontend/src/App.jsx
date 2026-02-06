import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter } from 'react-router-dom'
import { StoreProvider } from './Context/StoreContext'

const App = () => {
  return (
    <StoreProvider>
      <BrowserRouter>
        <div className='app'>
          <Navbar />
        </div>
      </BrowserRouter>
    </StoreProvider>
  )
}

export default App
