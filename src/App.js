import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './screens/Home.js'
import Search from './screens/Search'
import Library from './screens/Library'
import Contact from './screens/Contact'
import Login from './screens/Login'
import Resigter from './screens/Resigter'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/library' element={<Library />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/resigter' element={<Resigter />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  )
}

export default App
