// Allow import images
declare module '*.jpg';
declare module '*.png';

declare module '*.svg' {
  import React from 'react';
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

// Config environment variables
declare module 'react-native-dotenv' {
  export const API_URL: string;
  export const API_SECRET: string;
}
