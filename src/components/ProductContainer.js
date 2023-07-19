import React from 'react';
import { View, Image, Text } from 'react-native';

const ProductContainer = ({ image, title, cost }) => {
  return (
    <View>
      <Image source={image} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.cost}>{cost}</Text>
      </View>
    </View>
  );
};

const styles = {
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cost: {
    fontSize: 16,
    color: 'gray',
  },
};

export default ProductContainer;
