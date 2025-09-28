import React from 'react'
import Login from './login'
import Home from './Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer} from 'react-toastify'
const App = () => {
  return (
  <>
  <BrowserRouter>
    <ToastContainer />
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path='/home' element={<Home/>}/>
    </Routes>
  </BrowserRouter>
  </>
  )
}


export default App