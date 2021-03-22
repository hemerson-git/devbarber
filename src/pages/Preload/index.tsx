import React from 'react';
import { Text } from 'react-native';

// Components
import { Container } from './styles';

// SVG
import BarberLogo from '../../assets/barber.svg';

function Preload() {
  return (
    <Container>
      <BarberLogo width="100%" height="160"/>
    </Container>
  )
}

export default Preload;
