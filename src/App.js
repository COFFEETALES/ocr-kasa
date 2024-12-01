/* vim: set tabstop=2 softtabstop=0 expandtab shiftwidth=2 smarttab : */
import { BrowserRouter, Routes, Route } from 'react-router';

import Home from './Home';
import Page2 from './Page2';
import RouteLayout from './RouteLayout';

import './App.scss';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RouteLayout/>}>
            <Route index path="home" element={<Home/>}/>
            <Route path="contact" element={<Page2/>}/>
            <Route path="about" element={<Page2/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
