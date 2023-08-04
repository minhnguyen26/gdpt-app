import React from 'react';
import {Image as RNImage, ImageStyle, StyleProp} from 'react-native';
import FastImage from 'react-native-fast-image';

// Functions
import {isUrl} from '../utils/Utils';

export interface Props {
  source: any;
  style?: StyleProp<ImageStyle> | any;
  resizeMode?: 'contain' | 'cover' | 'stretch' | 'center';
  isNeedPath?: boolean;
}

const Image: React.FC<Props> = ({source, style, resizeMode, isNeedPath}) => {
  return typeof source === 'string' && isUrl(source) ? (
    <FastImage
      source={{uri: isNeedPath ? source : source}}
      style={style}
      resizeMode={resizeMode ? resizeMode : 'contain'}
    />
  ) : (
    <RNImage
      source={
        typeof source === 'string'
          ? {uri: isNeedPath ? source : source}
          : source
      }
      resizeMode={resizeMode ? resizeMode : 'contain'}
      style={style}
    />
  );
};

export default Image;
