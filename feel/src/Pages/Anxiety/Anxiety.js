import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native'

import { AntDesign } from '@expo/vector-icons'

import styles from './styles';

export default function Anxiety() {

  const navigation = useNavigation()

  const navigateBack = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>

        <TouchableOpacity style={styles.button}
          onPress={navigateBack}
        >
          <AntDesign name='arrowleft' color='#EC6C6E' size={20} />
        </TouchableOpacity>

        <Text style={styles.title}>Want to</Text> 
        <Text style={styles.title}>feel better?</Text> 
        <Text style={styles.description}>Choose your Activity or a Topic</Text>
      </View>
      <View style={styles.scrollViewContainer}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            marginTop: 30,
            marginRight: 20
          }}
        >
          <TouchableOpacity style={styles.menuButton}>
            <Text style={[styles.menuItem, { marginLeft: 30 }]}>Games</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton}>
            <Text style={styles.menuItem}>Music</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton}>
            <Text style={styles.menuItem}>Films</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton}>
            <Text style={styles.menuItem}>Food</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton}>
            <Text style={styles.menuItem}>Exercises</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton}>
            <Text style={styles.menuItem}>Books</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton}>
            <Text style={styles.menuItem}>Draw</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

    </View>
  );
}
