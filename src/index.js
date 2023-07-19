import React from 'react';
import { AppRegistry } from 'react-native';
import ProductContainer from './components/ProductContainer';

const App = () => {
  return (
    <ProductContainer />
  );
};

AppRegistry.registerComponent('ProductPage', () => App);
