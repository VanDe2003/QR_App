import React from 'react';
import { Image } from 'react-native';
import logoStyle from '../styles/logoStyle';

export default function LogoComponent() {
  return (
    <Image
      source={require('../assets/images/logo.png')}
      style={logoStyle.image}
    />
  );
}
