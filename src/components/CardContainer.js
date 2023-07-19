import React from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

const CardContainer = ({ walletAddress, secretPrice }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cryptoDetails}>
        <Text style={styles.walletAddressLabel}>Wallet Address</Text>
        <TextInput
          style={styles.walletAddressInput}
          value={walletAddress}
          onChangeText={walletAddress => {}}
        />
        <Text style={styles.secretPriceLabel}>Secret Price</Text>
        <TextInput
          style={styles.secretPriceInput}
          value={secretPrice}
          onChangeText={secretPrice => {}}
        />
        <Button
          title="Connect Wallet"
          style={styles.button}
          onPress={() => {}}
        />
        <Button
          title="Pay for Secret"
          style={styles.button}
          onPress={() => {}}
        />
        <Button
          title="Upload Secret"
          style={styles.button}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    margin: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  cryptoDetails: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
  },
  walletAddressLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  walletAddressInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  secretPriceLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  secretPriceInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  button: {
    width: 100,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#000',
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CardContainer;
