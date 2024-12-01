/* vim: set tabstop=2 softtabstop=0 expandtab shiftwidth=2 smarttab : */
import { NavLink } from 'react-router';

import './Home.scss';

import logements from './logements.json';

export default function Home() {
  return (
    <section>
      <h2>
        TEST
      </h2>
      <div className="home-gallery">
        {
          logements.map(
            (logement) => (
              <NavLink key={logement.id} to={`/location/${logement.id}`}>{ logement.title }</NavLink>
            )
          )
        }
      </div>
    </section>
  );
};
