// HomeScreen.js
import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello 👋</Text>
          <Text style={styles.username}>Christie Doe</Text>
        </View>
        <Image style={styles.avatar} source={require('./assets/avatar.jpg')} />
      </View>

      <Text style={styles.Title}>Your Insights</Text>

      <View style={styles.insightsContainer}>
        <View style={styles.insightBox}>
          <Ionicons name="scan" size={30} color="#5A67D8" />
          <Text style={styles.insightText}>Scan new</Text>
          <Text style={styles.insightSubText}>Scanned 483</Text>
        </View>
        <View style={styles.insightBox}>
          <Ionicons name="alert-circle" size={30} color="#E53E3E" />
          <Text style={styles.insightText}>Counterfeits</Text>
          <Text style={styles.insightSubText}>Counterfeited 32</Text>
        </View>
        <View style={styles.insightBox}>
          <Ionicons name="checkmark-circle" size={30} color="#48BB78" />
          <Text style={styles.insightText}>Success</Text>
          <Text style={styles.insightSubText}>Checkouts 8</Text>
        </View>
        <View style={styles.insightBox}>
          <Ionicons name="calendar" size={30} color="#38B2AC" />
          <Text style={styles.insightText}>Directory</Text>
          <Text style={styles.insightSubText}>History 26</Text>
        </View>
      </View>

      <View style={styles.exploreMoreContainer}>
        <Text style={styles.sectionTitle}>Explore More</Text>
        <Text style={styles.arrow}>→</Text>
      </View>
      <View style={styles.exploreMore}>
        {/* Bạn có thể thêm hình ảnh hoặc nội dung khác ở đây */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f7',
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      greeting: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      username: {
        fontSize: 18,
        color: '#a0aec0',
      },
      avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
      },
      Title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4a5568',
        marginTop: 20,
        marginBottom: 15,
      },
      sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4a5568',
      },
      insightsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',  // Ensure spacing between the cards
      },
      insightBox: {
        backgroundColor: '#fff',
        width: '47%',   // Adjust width to fit two in a row with some margin
        padding: 20,
        borderRadius: 12,
        marginBottom: 20, // Space between rows
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
      },
      insightText: {
        marginTop: 10,
        fontWeight: 'bold',
      },
      insightSubText: {
        marginTop: 5,
        color: '#a0aec0',
      },
      exploreMore: {
        marginTop: 20,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
      },
      exploreMoreContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between', // This will space out the title and arrow
        alignItems: 'center', // Center them vertically
        marginTop: 10,
        padding: 10,
        borderRadius: 10,
      },
      arrow: {
        fontSize: 24, // Adjust size if needed
        color: '#4A5568', // Match with your theme
      },

});
