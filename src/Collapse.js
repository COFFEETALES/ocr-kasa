/* vim: set tabstop=2 softtabstop=0 expandtab shiftwidth=2 smarttab : */
import { useState } from 'react';

import './Collapse.scss';

export default function Collapse({label, description, children}) {
  const [expanded, setExpanded] = useState(false);

  const toggle = () => setExpanded(!expanded);

  return (
    <>
      <div>{label} <button onClick={toggle}>⬇️</button></div>
      <div style={{display: expanded ? 'block' : 'none'}}>{children || description}</div>
    </>
  );
};

