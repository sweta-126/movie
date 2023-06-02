import React from 'react'
import Home from './Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Show from './Pages/Show'
const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/show/:id' element={<Show />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App