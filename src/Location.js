/* vim: set tabstop=2 softtabstop=0 expandtab shiftwidth=2 smarttab : */
import { useNavigate, useParams } from 'react-router';
import { useContext, useEffect, useState } from 'react';

import Collapse from './Collapse';
import Slideshow from './Slideshow';
import { ApiService } from './ApiService';

import './Location.scss';

export default function Location(a) {
  const { getLocationById } = useContext(ApiService);
  const navigate = useNavigate();
  const [location, setLocation] = useState(null);

  let { locationId } = useParams();

  useEffect(
    () => {
      const res = getLocationById(locationId)
      if (res) {
        setLocation(res);
      } else if (res === null) {
        navigate('/404');
      }
    }, [getLocationById, locationId, navigate]
  );

  if (!location) return null;

  return (
    <section className="plain" id="selected-location">
      <Slideshow images={location.pictures}/>
      <div id="selected-location-top-area">
        <div>
          <h2>
            {
              location.title
            }
          </h2>
          <p>
            {
              location.location
            }
          </p>
          <div id="selected-location-tags">
            {
              location.tags.map(
                tag => (
                  <div key={tag}>
                    {
                      tag
                    }
                  </div>
                )
              )
            }
          </div>
        </div>
        <div>
          <div id="selected-location-host">
            <span>
              {
                location.host.name
              }
            </span>
            <img alt="" src={location.host.picture}/>
          </div>
          <div id="selected-location-rating">
            {
              [1, 2, 3, 4, 5].map(
                rating => (
                  <div key={rating} className={
                    rating <= location.rating ? 'selected-location-star-active' : 'selected-location-star-inactive'
                  }>
                  </div>
                )
              )
            }
          </div>
        </div>
      </div>
      <div>
        <Collapse label="Description" description={location.description}/>
        <Collapse label="Equipements" description={
          location.equipments.join('\n')
        }/>
      </div>
    </section>
  );
};

