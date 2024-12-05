/* vim: set tabstop=2 softtabstop=0 expandtab shiftwidth=2 smarttab : */
import { NavLink } from 'react-router';
import { useContext } from 'react';

import { ApiService } from './ApiService';

import './Home.scss';

export default function Home() {
  const locations = useContext(ApiService);

  return (
    <section id="home-gallery">
      <h2>
        <div>Chez vous, partout et ailleurs</div>
      </h2>
      <div>
        {
          locations.map(
            (logement) => (
              <NavLink
                key={logement.id}
                to={`/location/${logement.id}`}
              ><img alt="" src={ logement.cover }/><div>{ logement.title }</div></NavLink>
            )
          )
        }
      </div>
    </section>
  );
};
