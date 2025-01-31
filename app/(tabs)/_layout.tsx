import React from 'react';
import { Tabs } from 'expo-router';
import Icon from '../../Icon';

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#000', // Black background like Spotify
          borderTopWidth: 0, // Remove top border
          height: 55,
        },
        tabBarActiveTintColor: '#fff', // White active color
        tabBarInactiveTintColor: '#888', // Gray inactive color
        tabBarShowLabel: true, // Show text labels
      }}
    >
      <Tabs.Screen
        name="audio"
        options={{
          title: 'My Music',
          tabBarIcon: ({ color }) => (
            <Icon name="applemusic" type="Fontisto" size={20} color={color} />
          ),
          headerShown: false,
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
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => (
            <Icon name="search" type="Ionicons" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: 'Setting',
          tabBarIcon: ({ color }) => (
            <Icon name="settings" type="Ionicons" size={20} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
