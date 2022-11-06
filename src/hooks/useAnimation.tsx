import { useRef } from 'react';
import { Animated, Easing } from 'react-native';

export const useAnimation = () => {
    const opacity = useRef(new Animated.Value(0.4)).current;
    const position = useRef(new Animated.Value(0)).current;

    const startMovingPosition = (intiPosition: number, duration: number = 300) => {
        position.setValue(intiPosition);

        Animated.timing(
            position,
            {
                toValue: 0,
                duration,
                useNativeDriver: true,
                // easing: Easing.bounce,
            }
        ).start();

    }

    const fadeIn = (duration: number = 300) => {
        Animated.timing(
            opacity,
            {
                toValue: 1,
                useNativeDriver: true,
                duration,
            }
        ).start();

    }
    const fadeOut = () => {
        Animated.timing(
            opacity,
            {
                toValue: 0.1,
                duration: 500,
                useNativeDriver: true,
            }
        ).start();
    }

    return {
        opacity,
        position,
        fadeIn,
        fadeOut,
        startMovingPosition,
    }
}
