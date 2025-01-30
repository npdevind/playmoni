import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Link } from 'expo-router';

const index = () => {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Text
        className="text-5xl text-purple-700 font-kaushanReg leading-normal pr-2 overflow-visible"
        style={{ includeFontPadding: false }}
      >
        PlayMoni
      </Text>
      <StatusBar style="dark" />
      <View className="px-2 py-2 rounded-md mt-3 bg-blue-500">
        <Link href="/audio" className="text-white text-xl">
          Go to Home
        </Link>
      </View>
    </View>
  );
};

export default index;
