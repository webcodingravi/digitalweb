import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ScrollToTop from './components/ScrollToTop'
import Timeline from './pages/Timeline'


const App = () => {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          {/* PUBLIC SITE */}


            <Route path='/' element={<Home />} />
             <Route path='/timeline' element={<Timeline />} />
         
    
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App