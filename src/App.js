import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Subscribe from './Subscribe'
import Survey from './Survey'
import axios from 'axios'

function App() {

  const [stats, setstats] = useState(true)

  useEffect(()=>{
    const func=async()=>{
      try {
        await axios.post('https://subscribersserver.onrender.com/preloader').then((res)=>{
          if(res?.data.status === 'success'){
            setstats(false)
          }
        })
      } catch (error) {
        console.log(error);
        
      }
    }
    func()
  },[])

  return (
    <>
      {
        !stats ?
        <Router>
          <Routes>
            <Route path='/' element={<Subscribe/>} />
            <Route path='/survey' element={<Survey/>} />
          </Routes>
        </Router>
        :
        <div>
          <h1>Loading</h1>
        </div>
      }
    </>
  )
}

export default App