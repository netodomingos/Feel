import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

import { AntDesign } from '@expo/vector-icons'

import styles from './styles';

export default function Anxiety() {
  return (
    <View style={styles.container} >
      <ActivityIndicator >
        <AntDesign name='arrowleft' size={20} color='#FFF' style={styles.icon} />
      </ActivityIndicator>

      <View style={styles.content} >
        <Text style={styles.title}>Want to</Text> 
        <Text style={styles.title}>feel better?</Text> 
        <Text style={styles.description}>Choose your Activity</Text>
      </View>



    </View>
  );
}
