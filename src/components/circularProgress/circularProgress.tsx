// CircularProgress.js
import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

interface CircularProgressProps {
    size: number;
    strokeWidth: number;
    progress: number;
    backgroundColor: string;
    progressColor: string;
    children: ReactNode;
}

function CircularProgress({
    size = 150,
    strokeWidth = 15,
    progress = 75,
    backgroundColor = '#e6e6e6',
    progressColor = '#4a0072',
    children,
}: CircularProgressProps) {
    const center = size / 2;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (circumference * progress) / 100;

    return (
        <View style={styles.container}>
            <Svg width={size} height={size}>
                <Circle
                    stroke={backgroundColor}
                    fill="none"
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}
                />
                <Circle
                    stroke={progressColor}
                    fill="none"
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    transform={`rotate(-90 ${center} ${center})`}
                />
            </Svg>
            <View style={StyleSheet.absoluteFill}>
                <View style={styles.textView}>{children}</View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CircularProgress;