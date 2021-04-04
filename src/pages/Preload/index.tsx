import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

// Components
import { Container, LoadingIcon } from './styles';

// SVG
import BarberLogo from '../../assets/barber.svg';

function Preload() {
  const navigation =  useNavigation();
  
  useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem('token');
        //
      if(!token) {
       navigation.navigate('SignIn');
      }
    })();
  });
  
  return (
    <Container>
      <BarberLogo width="100%" height="160"/>
      <LoadingIcon size="large" color="#FFF"/>
    </Container>
  )
}

export default Preload;
