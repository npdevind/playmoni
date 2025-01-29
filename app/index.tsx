import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Link } from 'expo-router';

const index = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-poppBold">PayMoni</Text>
      <StatusBar style="auto" />
      <Link href="/audio">Go to Home</Link>
    </View>
  );
};

export default index;
