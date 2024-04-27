import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";


import Log from './Log';
import Dashbord from './Dashbord';
import LogNavbar from './LogNavbar';
import Signup from './Signup';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <LogNavbar/>
        <Routes>
          <Route path='/login' element={<Log/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/dashbord' element={<Dashbord/>}/>
        </Routes>
      </BrowserRouter>
      {/* <Log/> */}
    </>
  )
}

export default App