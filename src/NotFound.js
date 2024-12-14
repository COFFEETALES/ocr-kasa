/* vim: set tabstop=2 softtabstop=0 expandtab shiftwidth=2 smarttab : */
import { NavLink } from 'react-router';

import './NotFound.scss';

export default function NotFound() {
  return (
    <section className="plain" id="not-found">
      <h2>404</h2>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to="/home">Retourner sur la page d'accueil</NavLink>
    </section>
  );
}
