import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

export default function LinkAutenticado(props) {
  const {logado} = useContext(AppContext);

  if (logado) {
    return (
      <Link {...props}/>
    )
  } else {
    return '';
  }

}
