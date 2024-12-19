/* vim: set tabstop=2 softtabstop=0 expandtab shiftwidth=2 smarttab : */
import { NavLink } from 'react-router';

import './Card.scss';

export default function Card({id, cover, title}) {
  return (
    <NavLink
      className="card-component"
      key={ id }
      to={ `/location/${id}` }
    ><img alt="" src={ cover }/><div>{ title }</div></NavLink>
  );
};
