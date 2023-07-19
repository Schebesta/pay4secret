import React from 'react';
import { Button } from 'react-native';

const UploadButton = ({ onPress }) => {
  return (
    <Button
      title="Upload Secret"
      onPress={onPress}
      style={{ backgroundColor: '#000', color: '#fff' }}
    />
  );
};

export default UploadButton;
