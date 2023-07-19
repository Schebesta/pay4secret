import React from 'react';
import { Button } from 'react-native';

const ConnectButton = ({ onPress }) => {
  return (
    <Button
      title="Connect Wallet"
      onPress={onPress}
      style={{ backgroundColor: '#000', color: '#fff' }}
    />
  );
};

export default ConnectButton;
