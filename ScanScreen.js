// ScanScreen.js
import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ScanScreen({ navigation }) {
  return (
    <View style={styles.Container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <View style={styles.scanArea}>
        <Image style={styles.productImage} source={require('./assets/juice.jpg')} />
        <View style={styles.scanFrame} />
      </View>

      <View style={styles.productInfoContainer}>
        <View style={styles.productInfo}>
          <Image style={styles.avatar} source={require('./assets/juice.jpg')} />
          <Text style={styles.productName}>Lauren's Orange Juice</Text>
          <TouchableOpacity style={styles.addButton}>
            <Ionicons name="add" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f7',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  scanArea: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
    width: 120, // Adjusted width for a smaller image
    height: 240, // Adjusted height for a smaller image
  },
  scanFrame: {
    position: 'absolute',
    width: 220,
    height: 220,
    borderColor: '#ff007f',
    borderWidth: 2,
    borderRadius: 10,
  },
  productInfoContainer: {
    backgroundColor: 'white', // Background color for the product info container
    padding: 10,
    borderRadius: 8,
    marginTop: 20, // Space above the container
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  productInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Ensure space between name and button
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  addButton: {
    marginLeft: 10,
    backgroundColor: '#ff007f',
    padding: 10,
    borderRadius: 5,
  },
});
