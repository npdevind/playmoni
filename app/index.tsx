import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Link } from 'expo-router';
import { useTheme } from '@/context/ThemeContext';

const index = () => {
  const { currentTheme } = useTheme();
  const isDark = currentTheme === 'dark';

  return (
    <View
      className={`flex-1 items-center justify-center ${isDark ? 'bg-black' : 'bg-white'}`}
    >
      <Text
        className={`text-5xl ${isDark ? 'text-purple-700' : 'text-purple-900'} font-kaushanReg leading-normal pr-2 overflow-visible`}
        style={{ includeFontPadding: false }}
      >
        PlayMoni
      </Text>
      {/* <StatusBar style={isDark ? 'light' : 'dark'} />; */}
      <View className="px-2 py-2 rounded-md mt-3 bg-blue-500">
        <Link href="/audio" className="text-white text-xl">
          Go to Home
        </Link>
      </View>
    </View>
  );
};

export default index;
