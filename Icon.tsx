import React from 'react';
import { TextStyle } from 'react-native';
import {
  FontAwesome,
  MaterialIcons,
  Ionicons,
  Feather,
  Entypo,
  Fontisto,
  MaterialCommunityIcons,
  AntDesign,
} from '@expo/vector-icons';

// Define available icon sets
const iconSets = {
  FontAwesome,
  MaterialIcons,
  Ionicons,
  Feather,
  Entypo,
  Fontisto,
  MaterialCommunityIcons,
  AntDesign,
};

// Extract valid icon names from each set (defaulting to `any` for flexibility)
type IconType = keyof typeof iconSets;
type IconName = string; // Fallback type (we'll refine this below)

interface IconProps {
  name: IconName;
  type?: IconType; // Must be one of the predefined sets
  size?: number;
  color?: string;
  style?: TextStyle;
}
// Reusable Icon component with TypeScript
const Icon: React.FC<IconProps> = ({
  name,
  type = 'FontAwesome',
  size = 24,
  color = 'black',
  style,
}) => {
  const IconComponent = iconSets[type] || FontAwesome; // Default to FontAwesome if type is incorrect
  return (
    <IconComponent name={name as any} size={size} color={color} style={style} />
  );
};

export default Icon;
