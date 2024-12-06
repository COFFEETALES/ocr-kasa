/* vim: set tabstop=2 softtabstop=0 expandtab shiftwidth=2 smarttab : */
import { useState } from 'react';

import './Collapse.scss';

export default function Collapse({label, description, children}) {
  const [expanded, setExpanded] = useState(false);

  const toggle = () => setExpanded(!expanded);

  const containerClass = (
    ['collapse-component', expanded ? 'collapse-expanded' : ''].filter(Boolean).join(' ')
  );

  return (
    <div className={containerClass}>
      <button onClick={toggle}>
        <div>{label}</div>
        <div></div>
      </button>
      <div>
        <div></div>
        <div>
          <div>{children || description}</div>
        </div>
      </div>
    </div>
  );
};

