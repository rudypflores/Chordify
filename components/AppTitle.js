import React, { useState, useEffect } from 'react';
import { StyleSheet, Animated, Easing } from 'react-native';
import LottieView from 'lottie-react-native';

const AppTitle = () => {
    const [progress, setProgress] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(progress, {
            toValue: 1,
            duration: 1000,
            easing: Easing.ease,
            useNativeDriver: true,
        }).start();
    });

    return (
        <LottieView loop={true} source={require('../assets/app-title-animation.json')} progress={progress} style={styles.settings} />
    );
};

const styles = StyleSheet.create({
    settings: {
        width:'50%',
    }
});

export default AppTitle;