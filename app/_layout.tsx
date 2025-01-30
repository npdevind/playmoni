import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { SplashScreen, Stack } from 'expo-router';
import '../global.css';
import { useFonts } from 'expo-font';
import AudioPlayer from '@/components/appComponents/audioPlayer';

SplashScreen.preventAutoHideAsync(); // Prevents the splash screen from auto-hiding before the app is ready

const RootLayout = () => {
  //importing fonts
  const [fontLoaded, error] = useFonts({
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'KaushanScript-Regular': require('../assets/fonts/KaushanScript-Regular.ttf'),
  });
  useEffect(() => {
    if (error) throw error; // Throw an error if the fonts fail to load
    if (fontLoaded) SplashScreen.hideAsync(); // Hides the splash screen when everything is ready or preventAutoHideAsync() Keeps the splash screen visible
  }, [fontLoaded, error]);

  if (!fontLoaded && !error) return null; // Show nothing while fonts load

  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default RootLayout;
