import React from 'react';
import * as FaIcons from 'react-icons/fa';

interface IconProps {
  name: keyof typeof FaIcons;
  size?: number;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 24, color = 'currentColor' }) => {
  const IconComponent = FaIcons[name];
  return <IconComponent size={size} color={color} />;
};

export default Icon;
