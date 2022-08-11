import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AllMemories from './components/AllMemories';
import AddMemory from './components/AddMemory';
import PageNotFound from './components/PageNotFound';
import About from './components/About';
import DeleteMemory from './components/DeleteMemory';
import UpdateMemory from './components/UpdateMemory';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/getallmemories' element={<AllMemories />} />
          <Route path='/addmemory' element={<AddMemory />} />
          <Route path='/aboutme' element={<About />} />
          <Route path='/updatememory/:id' element={<UpdateMemory />} />
          <Route path='/deletememory/:id' element={<DeleteMemory />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App