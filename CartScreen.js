// CartScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import products from './products.json';

const imageMapping = {
  "Lauren's Orange Juice": require('./assets/orangejuice.png'),
  "Apple Juice": require('./assets/juice.jpg'),
  "Grape Juice": require('./assets/grape.png'),
};

export default function CartScreen({ navigation }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Chuyển đổi dữ liệu từ products.json sang định dạng cho cartItems
    const initialCartItems = products.map((product, index) => ({
      id: product.barcode, // sử dụng barcode làm ID
      name: product.name,
      price: product.price,
      quantity: 1, // Mặc định số lượng là 1
      image: imageMapping[product.name],
    }));
    setCartItems(initialCartItems);
  }, []);

  const updateQuantity = (id, action) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: action === 'increase' ? item.quantity + 1 : Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>₹ {item.price}</Text>
      </View>
      <View style={styles.quantityControl}>
        <TouchableOpacity onPress={() => updateQuantity(item.id, 'decrease')} style={styles.quantityButton}>
          <Text style={styles.quantityButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{item.quantity}</Text>
        <TouchableOpacity onPress={() => updateQuantity(item.id, 'increase')} style={styles.quantityButton}>
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Nút Quay lại */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.cartTitle}>Your Cart 👍</Text>

      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.cartList}
      />

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.totalPrice}>₹ {calculateTotal()}</Text>
      </View>

      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>Proceed to checkout</Text>
      </TouchableOpacity>
    </View>
  );
}

// Các styles giữ nguyên
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    paddingHorizontal: 20,
    paddingTop: 100,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  cartTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cartList: {
    flexGrow: 0,
    marginBottom: 20,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  productDetails: {
    flex: 1,
    paddingHorizontal: 15,
  },
  productName: {
    fontSize: 16,
    fontWeight: '500',
  },
  productPrice: {
    fontSize: 16,
    color: '#FF6347',
    marginTop: 5,
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  quantityButton: {
    padding: 5,
  },
  quantityButtonText: {
    fontSize: 18,
    color: '#FF6347',
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#EFEFEF',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 18,
    color: '#FF6347',
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
