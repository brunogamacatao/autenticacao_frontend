import React, {useContext} from 'react'

import '../styles/wait_overlay.scss';

import AppContext from '../context/AppContext';

export default function WaitOverlay() {
  const {overlay} = useContext(AppContext);

  if (overlay.show) {
    return (
      <div className="overlay">
        <div className="spinner-border mr-5" role="status"/>
        <h3>{overlay.textoOverlay}</h3>
      </div>
    )
  } else {
    return '';
  }
}
