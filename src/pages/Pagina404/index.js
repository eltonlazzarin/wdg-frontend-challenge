import React from 'react';

import img from '../../assets/404Page.svg';

import { Container } from './styles';

export default function Pagina404() {
  return (
    <Container>
      <div>
        <h4>OOOPS! PAGE NOT FOUND</h4>
        <img src={img} alt="404Page" />
        <h2>WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND</h2>
      </div>
    </Container>
  );
}
