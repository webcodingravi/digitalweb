import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ScrollToTop from './components/ScrollToTop'
import Timeline from './pages/Timeline'
import Timeline2 from './pages/Timeline2'
import Timeline3 from './pages/Timeline3'


const App = () => {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          {/* PUBLIC SITE */}


            <Route path='/' element={<Home />} />
             {/* <Route path='/timeline' element={<Timeline />} /> */}
              {/* <Route path='/timeline' element={<Timeline2 />} /> */}
                <Route path='/timeline' element={<Timeline3 />} />
         
    
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App