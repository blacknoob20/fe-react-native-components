import { useContext } from 'react';
import { Animated, Button, StyleSheet, View } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useAnimation } from '../hooks/useAnimation';

export const Animation101Screen = () => {
    const { theme: { colors } } = useContext(ThemeContext);
    const { opacity, position, fadeIn, fadeOut, startMovingPosition } = useAnimation();

    return (
        <View style={styles.container}>
            <Animated.View
                style={{
                    ...styles.purpleBox,
                    // marginBottom: 20,
                    opacity: opacity,
                    transform: [{
                        translateX: position,
                    }],
                }}
            />
            <Button
                title='Fade In'
                onPress={() => {
                    fadeIn();
                    startMovingPosition(-100, 800);
                }}
                color={colors.primary}
            />
            <Button
                title='Fade Out'
                onPress={fadeOut}
                color={colors.primary}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        width: 150,
        height: 150,
    },
});