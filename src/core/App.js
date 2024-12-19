/* vim: set tabstop=2 softtabstop=0 expandtab shiftwidth=2 smarttab : */
import { BrowserRouter, Navigate, Routes, Route } from 'react-router';

import About from '../pages/About';
import ApiService from '../services/ApiService';
import Home from '../pages/Home';
import Location from '../pages/Location';
import NotFound from '../core/NotFound';
import Page2 from '../pages/Page2';
import RouteLayout from '../core/RouteLayout';

import './App.scss';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RouteLayout/>}>
            <Route path="/" element={<Navigate to="home" replace />}/>
            <Route element={<ApiService/>}>
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
