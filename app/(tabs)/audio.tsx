import * as MediaLibrary from 'expo-media-library';
import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
// import Icon from '../../Icon';
import AudioPlayer from '@/components/appComponents/audioPlayer';
import { Image } from 'expo-image';
import defaultThumbnail from '../../assets/images/default-thumbnail.png';

type AudioFile = {
  id: string;
  filename: string;
  uri: string;
  imageUri?: string; //i do add this
};

// Helper function to map an Asset to an AudioFile
const mapAssetToAudioFile = (asset: MediaLibrary.Asset): AudioFile => {
  return {
    id: asset.id,
    filename: asset.filename,
    uri: asset.uri,
    imageUri: asset.uri ? `${asset.uri.replace(/\.mp3$/, '.jpg')}` : '', // Example logic to set imageUri
  };
};

const AudioComponent = () => {
  const [audioFiles, setAudioFiles] = useState<AudioFile[]>([]);
  const [permissionResponse, setPermissionResponse] = useState<any>(null);

  // Audio state management
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  useEffect(() => {
    (async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      setPermissionResponse(status);
      if (status !== 'granted') {
        alert('Permission to access media library is required!');
        return;
      }
      // const media = await MediaLibrary.getAssetsAsync({
      //   mediaType: MediaLibrary.MediaType.audio,
      // });
      // setAudioFiles(media.assets as AudioFile[]);

      // Initialize assets array
      let assetsArray: AudioFile[] = [];
      let hasNextPage = true;
      let after: any = null;

      while (hasNextPage) {
        const media = await MediaLibrary.getAssetsAsync({
          mediaType: MediaLibrary.MediaType.audio,
          first: 100, // Adjust the number of files fetched per request
          after, // Fetch the next set of assets (pagination)
        });

        // Map the fetched assets to the AudioFile type
        assetsArray = [
          ...assetsArray,
          ...media.assets.map(mapAssetToAudioFile),
        ];
        hasNextPage = media.hasNextPage;
        after = media.endCursor;
      }

      setAudioFiles(assetsArray);
    })();
  }, []);

  const playAudio = async (uri: string, index: number) => {
    try {
      await stopAudio(); // Stop any currently playing audio before starting a new one.
      const { sound } = await Audio.Sound.createAsync({ uri });
      setSound(sound);
      setCurrentIndex(index);
      setIsPlaying(true);
      await sound.playAsync();
    } catch (error) {
      console.error('Error playing audio:', error);
    }
  };

  const pauseAudio = async () => {
    if (sound) {
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  };

  const stopAudio = async () => {
    if (sound) {
      await sound.stopAsync();
      setIsPlaying(false);
    }
  };

  const nextAudio = () => {
    if (currentIndex < audioFiles.length - 1) {
      playAudio(audioFiles[currentIndex + 1].uri, currentIndex + 1);
    }
  };

  const previousAudio = () => {
    if (currentIndex > 0) {
      playAudio(audioFiles[currentIndex - 1].uri, currentIndex - 1);
    }
  };

  if (permissionResponse !== 'granted') {
    return (
      <View>
        <Text>Permission to access media library is required.</Text>
      </View>
    );
  }

  return (
    <View className="flex-1">
      {/* Audio Files List */}
      <FlatList
        className="px-3 py-2"
        data={audioFiles}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View className="flex-row items-center gap-2 mt-1 border-b border-gray-200">
            {/* Check if the thumbnail exists, otherwise show the icon */}
            {item.imageUri ? (
              <Image
                source={{ uri: item.imageUri }}
                style={{ width: 40, height: 40, borderRadius: 5 }}
              />
            ) : (
              <Image
                source={defaultThumbnail} // Fallback image from local assets
                style={{ width: 40, height: 40 }}
              />
            )}
            <Text
              className={`font-poppMedium text-md w-80 ${currentIndex === index ? 'text-blue-500' : 'text-black'}`}
              numberOfLines={1} // This ensures text is truncated after one line
              // ellipsizeMode="tail" // Adds '...' at the end if the text is truncated
              onPress={() => playAudio(item.uri, index)} // Play on click
            >
              {item.filename}
            </Text>
          </View>
        )}
      />

      {/* Footer Player */}
      {currentIndex >= 0 && (
        <AudioPlayer
          audioFiles={audioFiles}
          currentIndex={currentIndex}
          playAudio={playAudio}
          pauseAudio={pauseAudio}
          stopAudio={stopAudio}
          nextAudio={nextAudio}
          previousAudio={previousAudio}
          isPlaying={isPlaying}
        />
      )}
    </View>
  );
};

export default AudioComponent;
