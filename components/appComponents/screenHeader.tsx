import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useTheme } from '@/context/ThemeContext';

const ScreenHeader = ({
  title = '',
  onAvatarPress,
}: {
  title?: string;
  onAvatarPress?: () => void;
}) => {
  const { currentTheme } = useTheme();
  const isDark = currentTheme === 'dark';

  // Replace this with actual user data from context/auth state
  const user = {
    name: 'John Doe',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg', // Default avatar URL
  };

  return (
    <View
      className={`flex-row items-center justify-between px-4 py-3  ${isDark && 'bg-gray-900'} border-b-2 border-gray-800`}
    >
      {/* Avatar */}
      <TouchableOpacity onPress={onAvatarPress}>
        <Image
          source={{ uri: user.avatar }}
          className="w-10 h-10 rounded-full border border-gray-600"
        />
      </TouchableOpacity>
    </View>
  );
};

export default ScreenHeader;
