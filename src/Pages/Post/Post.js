import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons'

import { useNavigation, useRoute } from '@react-navigation/native'

import styles from './styles'

export default function Post() {

  const navigation = useNavigation()

  function goBackToPost(){
    navigation.goBack()
  }

    const route = useRoute()

    const post = route.params.post
  return (
    <View style={styles.container}>
      <View style={styles.photoContainer}>
        <TouchableOpacity style={styles.arrow} onPress={goBackToPost}>
          <Feather name='arrow-left' size={25} color='#EC6C6E'/>
        </TouchableOpacity>
        <Image
          resizeMode='cover'
          style={styles.postImage}
          source={post.postImage}
        />
      </View>
      <Text style={styles.title}>{post.postTitle}</Text>
      <Text style={styles.description}>{post.postDescription}</Text>

      <Text style={styles.bigDescription}>{post.bigDescriptionPost}</Text>
    </View>
  );
}
