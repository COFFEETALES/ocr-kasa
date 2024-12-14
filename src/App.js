/* vim: set tabstop=2 softtabstop=0 expandtab shiftwidth=2 smarttab : */
import { BrowserRouter, Navigate, Routes, Route } from 'react-router';

import About from './About';
import ApiService from './ApiService';
import Home from './Home';
import Location from './Location';
import NotFound from './NotFound';
import Page2 from './Page2';
import RouteLayout from './RouteLayout';

import './App.scss';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RouteLayout/>}>
            <Route path="/" element={<Navigate to="home" replace />}/>
            <Route path="/" element={<ApiService/>}>
              <Route path="home" element={<Home/>}/>
              <Route path="location/:locationId" element={<Location/>}/>
            </Route>
            <Route path="contact" element={<Page2/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
