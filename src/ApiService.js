/* vim: set tabstop=2 softtabstop=0 expandtab shiftwidth=2 smarttab : */
import { Outlet } from 'react-router';
import { createContext, useEffect, useState } from 'react';

export const ApiService = createContext(null);

export default function Apiservice() {
  const [locations, setLocations] = useState([]);

  useEffect(
    () => {
      fetch(
        '/logements.json'
      ).then(
        response => response.json()
      ).then(
        data => setLocations(data)
      )
    }, []
  );

  return (
    <ApiService.Provider value={locations}>
      <Outlet/>
    </ApiService.Provider>
  );
}
