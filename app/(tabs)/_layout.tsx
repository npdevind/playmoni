import { View, Text } from 'react-native';
import React from 'react';
import { Tabs, Redirect } from 'expo-router';
import Icon from '../../Icon';

const TabsLayout = () => {
  return (
    <>
      <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
        <Tabs.Screen
          name="audio"
          options={{
            title: 'My Music',
            tabBarIcon: ({ color }) => (
              <Icon name="applemusic" type="Fontisto" size={20} color={color} />
            ),
            // headerShown: false
          }}
        />
        <Tabs.Screen
          name="video"
          options={{
            title: 'Video',
            tabBarIcon: ({ color }) => (
              <Icon name="videocam" type="Ionicons" size={20} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
