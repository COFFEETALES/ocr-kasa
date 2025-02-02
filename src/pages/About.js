/* vim: set tabstop=2 softtabstop=0 expandtab shiftwidth=2 smarttab : */
import './About.scss';

import Collapse from '../features/Collapse';

export default function About() {
  return (
    <section id="about">
      <h2>
        À propos
      </h2>
      <div>
        <Collapse label="Fiabilité">
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
        </Collapse>
        <Collapse label="Respect">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.
        </Collapse>
        <Collapse label="Service">
          La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.
        </Collapse>
        <Collapse label="Sécurité">
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
        </Collapse>
      </div>
    </section>
  );
};

