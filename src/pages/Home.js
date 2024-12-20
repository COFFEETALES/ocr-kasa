/* vim: set tabstop=2 softtabstop=0 expandtab shiftwidth=2 smarttab : */
import { useContext } from 'react';

import Card from '../features/Card'; 
import { ApiService } from '../services/ApiService';

import './Home.scss';

export default function Home() {
  const { locations } = useContext(ApiService);

  return (
    <section id="home-gallery">
      <h2>
        <div>Chez vous, partout et ailleurs</div>
      </h2>
      <div>
        {
          locations.map(
            (logement) => (
              <Card 
                key={ logement.id }
                id={ logement.id }
                cover={ logement.cover }
                title={ logement.title }
              />
            )
          )
        }
      </div>
    </section>
  );
};
