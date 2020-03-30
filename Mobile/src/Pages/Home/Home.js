import React, { useState } from 'react';
import { View, Text, Slider, TouchableOpacity } from 'react-native';
import LottieView from "lottie-react-native";
import { useNavigation } from '@react-navigation/native'

import { AntDesign } from '@expo/vector-icons'

import styles from './styles';

export default function Home() {
  const [ level, setLevel ] = useState(50)
  const [ levelText, setLevelText ] = useState('Neutral')

  const navigation = useNavigation()

  function LevelUser(){
    if(level >= 70){
      setLevelText('High Anxiety')
    }
     else if(level < 40) {
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

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate('anxiety')}
          >
            <AntDesign name='arrowright' size={20} color='#FFF' style={styles.icon} /> 
          </TouchableOpacity>
        </View>

        <View style={styles.animation}>
          <LottieView
            autoPlay
            loop
            style={{
              paddingBottom: 20,
              width: 400,
              height: 350,
              backgroundColor: '#1B1C2E',
            }}
            source={require('../../../assets/woman.json')}
          />
        </View>
      </View>
    </View>
  );
}
