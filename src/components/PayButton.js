import React from 'react';
import { Button } from 'react-native';

const PayButton = ({ onPress }) => {
  return (
    <Button
      title="Pay for Secret"
      onPress={onPress}
      style={{ backgroundColor: '#000', color: '#fff' }}
    />
  );
};

export default PayButton;
