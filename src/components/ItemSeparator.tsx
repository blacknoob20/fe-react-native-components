import React, { useContext } from 'react';
import { View } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const ItemSeparator = () => {
    const { theme: { dividerColor } } = useContext(ThemeContext);
    return (
        <View
            style={{
                borderColor: dividerColor,
                borderBottomWidth: 1,
                marginBottom: 20,
            }}
        />
    )
}
