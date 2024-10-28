// IntroSlider.js
import React, { useState } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
    {
      key: '1',
      title: 'Scan, Pay & Enjoy!',
      text: 'Scan products you want to buy and pay by your phone & enjoy happy, friendly Shopping!',
      image: require('./assets/intro1.png'), 
      backgroundColor: '#febe29',
    },
    {
      key: '2',
      title: 'Easy and Secure',
      text: 'Experience the safest way to shop using our app.',
      image: require('./assets/intro2.png'), 
      backgroundColor: '#22bcb5',
    },
    {
      key: '3',
      title: 'Track Orders',
      text: 'Track your order status and delivery in real-time.',
      image: require('./assets/intro3.png'), 
      backgroundColor: '#3395ff',
    },
  ];

export default function IntroSlider({ navigation }) {
  const [showHome, setShowHome] = useState(false);

  const renderSlide = ({ item }) => {
    return (
      <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
        <Image source={item.image} style={styles.introImage} />
        <Text style={styles.introTitle}>{item.title}</Text>
        <Text style={styles.introText}>{item.text}</Text>
      </View>
    );
  };

  const onDone = () => {
    setShowHome(true);
    navigation.replace('HomeMain');
  };

  if (showHome) return null;
  return <AppIntroSlider renderItem={renderSlide} data={slides} onDone={onDone} />;
}

const styles = StyleSheet.create({
      slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      introImage: {
        width: 320,
        height: 320,
      },
      introTitle: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      introText: {
        fontSize: 16,
        textAlign: 'center',
      },
});
