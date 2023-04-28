import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'
import NotFound from './pages/NotFound'
import DetailedPost from './pages/DetailedPost'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <div className="container">
      {/* Ser till att bara EN "page / route" visas åt gången, lite som en switch, hette <Switch> förut */}
      <Routes> 
        <Route index element={<Home />} />
        <Route path='/new' element={<CreatePost />}/>
        <Route path='/post/:id' element={<DetailedPost />}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  </BrowserRouter>
  )
}

export default App
