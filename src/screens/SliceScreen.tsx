import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useEffect, useState } from 'react';
import { Animated, Dimensions, Image, ImageSourcePropType, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useAnimation } from '../hooks/useAnimation';

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const { height: screenH, width: screenW } = Dimensions.get('window');

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png')
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png')
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png')
  },
]

interface Props extends StackScreenProps<any, any> { };

export const SliceScreen = ({ navigation }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const { theme: { colors } } = useContext(ThemeContext);
  const { opacity, fadeIn, fadeOut } = useAnimation();

  useEffect(() => {
    if (activeIndex === (items.length - 1)) {
      fadeIn();
      setShowButton(true);
    } else fadeOut();
  }, [activeIndex]);

  const renderItem = (item: Slide) => (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
        borderRadius: 5,
        padding: 40,
        justifyContent: 'center',
      }}
    >
      <Image
        source={item.img}
        style={{
          width: 350,
          height: 400,
          resizeMode: 'center',
        }}
      />
      <Text style={{ ...styles.title, color: colors.primary }}>{item.title}</Text>
      <Text style={{ ...styles.subtitle, color: colors.text }}>{item.desc}</Text>
    </View>
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        // backgroundColor: 'red',
        paddingTop: 50,
      }}
    >
      <Carousel
        // ref={(c) => { this._carousel = c; }}
        data={items}
        renderItem={({ item }) => renderItem(item)}
        sliderWidth={screenW}
        itemWidth={screenW}
        layout={'default'}
        onSnapToItem={index => setActiveIndex(index)}
      />
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        alignItems: 'center',
      }}>

        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeIndex}
          dotStyle={{
            alignItems: 'center',
            backgroundColor: colors.text,
            borderRadius: 10,
            height: 10,
            justifyContent: 'center',
            width: 10,
          }}
          activeOpacity={0.8}
        />
        {showButton &&
          <Animated.View
            style={{
              opacity
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate('HomeScreen')}
              style={{
                alignItems: 'center',
                backgroundColor: colors.primary,
                borderRadius: 10,
                flexDirection: 'row',
                height: 50,
                justifyContent: 'space-between',
                paddingHorizontal: 10,
                width: 130,
              }}
            >
              <Text
                style={{
                  fontSize: 25,
                  color: colors.text,
                }}
              >Entrar</Text>
              <Icon
                name={'chevron-forward-outline'}
                color={colors.text}
                size={33}
              />
            </TouchableOpacity>
          </Animated.View>
        }
      </View>
    </SafeAreaView>
  )
}

export const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitle: {
    fontWeight: 'bold',
  },
});