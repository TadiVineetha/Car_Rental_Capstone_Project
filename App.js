import React from 'react';
import './App.css';
import Login from './components/Login';
import Signin from './components/Signin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      {/* <Sidebar> */}
{/* <MyComponent/> */}


        <Routes>
          <Route path="/" element={<Signin />} />
         
        </Routes>
      {/* </Sidebar> */}
    </BrowserRouter>
  );
};

export default App;
