import React from 'react'
import Home from './pages/Home'
import { UpcomingProject } from './components/UpcomingProject'
import About from './pages/About'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
 
 

const App = () => {
  return (
    <>
    <div className='overflow-x-hidden  bg-[#060616]'> <Home/>
    <About/>

 
   
    <UpcomingProject/>
    
    
        <ToastContainer position="top-center" />
     
    </div>
   
    
    
    </>
  )
}

export default App