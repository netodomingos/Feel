import React, { useState } from 'react';
import { View, Text, Slider } from 'react-native';
import LottieView from "lottie-react-native";

import styles from './styles';

export default function Home() {
  const [ level, setLevel ] = useState(50)
  const [ levelText, setLevelText ] = useState('Neutral')

  function LevelUser(){
    if(level > 70){
      setLevelText('High Anxiety')
    }
    if(level < 40) {
      setLevelText('Low Anxiety')
    } 
    else {
      setLevelText('Neutral')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Feeling</Text>
        <Text style={styles.title}>anxious</Text>
        <Text style={styles.title}>today?</Text>
        <View style={styles.textGroup}>
            <Text style={styles.text}>Your anxiety level</Text>
            <Text style={styles.textLevel}>{levelText}</Text>
        </View>

        <View style={styles.sliderContainer}>
          <Slider 
            minimumValue={1}
            maximumValue={100}
            minimumTrackTintColor="#EC6C6E"
            maximumTrackTintColor="#FFF"
            thumbTintColor="#FFF"
            value={level}
            onValueChange={value => setLevel(value)}
            onSlidingComplete={LevelUser}
          />
        </View>
        <View style={styles.animation}>
          <LottieView
            autoPlay
            loop
            style={{
              width: 400,
              height: 400,
              backgroundColor: '#1B1C2E',
            }}
            source={require('../../../assets/woman.json')}
          />
        </View>
      </View>
    </View>
  );
}
