// App.js
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IntroSlider from './IntroSlider';
import HomeScreen from './HomeScreen';
import ScanScreen from './ScanScreen';
import CartScreen from './CartScreen';

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeMain" component={HomeScreen} options={{ headerShown: false }} />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  const [showHome, setShowHome] = useState(false);

  const handleDone = () => setShowHome(true);

  return (
    <NavigationContainer>
      {showHome ? (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'Scan') {
                iconName = 'qr-code-outline';
              } else if (route.name === 'Cart') {
                iconName = 'cart-outline';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
          })}
        >
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Scan" component={ScanScreen} />
          <Tab.Screen name="Cart" component={CartScreen} />
        </Tab.Navigator>
      ) : (
        <IntroSlider navigation={{ replace: handleDone }} />
      )}
    </NavigationContainer>
  );
}
