import React, { useState } from 'react';
import { ActivityIndicator, Animated, ImageStyle, StyleProp, View } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const FadeinImage = ({ uri, style }: Props) => {
  const { opacity, fadeIn } = useAnimation();
  const [isLoading, setIsLoading] = useState(false);
  const finishLoading = () => {
    setIsLoading(false);
    fadeIn();
  }

  return (
    <View>
      {
        isLoading && <ActivityIndicator
          style={{ position: 'absolute' }}
          color={'#5856D6'}
          size={30}
        />
      }
      <Animated.Image
        source={{ uri }}
        onLoadEnd={finishLoading}
        style={{
          ...style as any,
          // width: '100',
          // height: 400,
          opacity
        }}
      />
    </View>
  )
}
