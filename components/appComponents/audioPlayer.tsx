import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from '../../Icon';

const AudioPlayer = ({
  audioFiles = '',
  currentIndex = '',
  playAudio = '',
  pauseAudio = '',
  stopAudio = '',
  nextAudio = '',
  previousAudio = '',
  isPlaying = '',
}: any) => {
  return (
    <View className="absolute bottom-0 left-0 right-0 p-4 bg-gray-800 justify-center items-center z-10">
      <Text className="text-white text-lg mb-2">
        {audioFiles[currentIndex]?.filename}
      </Text>
      <View className="flex-row justify-evenly w-full">
        <TouchableOpacity onPress={previousAudio}>
          <Icon
            name="play-skip-back-circle-sharp"
            type="Ionicons"
            size={50}
            color="white"
            // style={}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={
            isPlaying
              ? pauseAudio
              : () => playAudio(audioFiles[currentIndex].uri, currentIndex)
          }
        >
          {isPlaying ? (
            <Icon name="pausecircle" type="AntDesign" size={50} color="white" />
          ) : (
            <Icon name="play" type="AntDesign" size={50} color="white" />
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={nextAudio}>
          <Icon
            name="play-skip-forward-circle"
            type="Ionicons"
            size={50}
            color="white"
            // style={}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AudioPlayer;
