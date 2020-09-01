import React, { useState, useEffect } from 'react';
import { StyleSheet, Animated, Easing } from 'react-native';
import LottieView from 'lottie-react-native';

const MusicalNote = () => {
    const [progress, setProgress] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(progress, {
            toValue: 1,
            duration: 4000,
            easing: Easing.ease,
            useNativeDriver: true,
        }).start();
    });

    return (
        <LottieView loop={true} source={require('../assets/musical-note-animation.json')} progress={progress} style={styles.settings} />
    );
};

const styles = StyleSheet.create({
    settings: {
        width:'100%',
    }
});

export default MusicalNote;