/* vim: set tabstop=2 softtabstop=0 expandtab shiftwidth=2 smarttab : */
import { Outlet } from 'react-router';
import Header from './Header';

export default function RouteLayout() {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  );
}
