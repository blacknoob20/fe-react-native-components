import React, { useContext, useState } from 'react';
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { FadeinImage } from '../components/FadeinImage';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';
// import { styles } from '../themes/appTheme';

export const InfiniteScrollScreen = () => {
  const { theme: { colors } } = useContext(ThemeContext);
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const loadMore = () => {
    const newData: number[] = [];

    for (let i = 0; i < 5; i++) {
      newData[i] = numbers.length + i;
    }

    setTimeout(() => {
      setNumbers([...numbers, ...newData]);

    }, 1500);
  }

  const renderItem = (item: number) => {
    return (
      // <Text style={stylesScreen.textItem}>
      //   {item}
      // </Text>

      <FadeinImage
        uri={`https://picsum.photos/id/${item}/500/400`}
        style={{
          width: '100%',
          height: 400,
        }}
      />

      // <Image
      //   source={{
      //     uri: `https://picsum.photos/id/${item}/500/400`,
      //   }}
      //   style={{
      //     width: '100%',
      //     height: 400,
      //   }}
      // />
    )
  }

  return (
    // <View style={styles.globalMargin}>
    <View>

      <FlatList
        data={numbers}
        keyExtractor={(item, index) => `${index}-${item}`}
        renderItem={({ item }) => renderItem(item)}

        ListHeaderComponent={() => (
          <View style={{ marginHorizontal: 20 }}>
            <HeaderTitle title='Infinite Scroll' />
          </View>
        )}

        onEndReached={loadMore}
        onEndReachedThreshold={0.5}

        ListFooterComponent={
          () => (
            <View
              style={{
                height: 150,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ActivityIndicator size={25} color={colors.primary} />
            </View>
          )
        }
      />
    </View>
  )
}

const stylesScreen = StyleSheet.create({
  textItem: {
    color: 'black',
    backgroundColor: 'green',
    height: 150,
  }
});