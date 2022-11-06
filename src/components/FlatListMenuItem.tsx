import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MenuItem } from '../interfaces/appIterfaces';

import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
    menuItem: MenuItem;
}

export const FlatListMenuItem = ({ menuItem }: Props) => {
    const navigation = useNavigation<any>();
    const { theme: { colors } } = useContext(ThemeContext);

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate(menuItem.component)}
        >
            <View style={styles.container}>
                <Icon
                    name={menuItem.icon}
                    color={colors.primary}
                    size={23}
                />
                <Text style={{ ...styles.itemText, color: colors.text }}>{menuItem.name}</Text>
                {/* este view empuja el icono al final */}
                <View style={{ flex: 1 }} />
                <Icon
                    name={'chevron-forward-outline'}
                    color={colors.primary}
                    size={23}
                />
            </View>
        </TouchableOpacity>
    )
}

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemText: {
        color: 'black',
        marginLeft: 10,
        fontSize: 19
    },

});