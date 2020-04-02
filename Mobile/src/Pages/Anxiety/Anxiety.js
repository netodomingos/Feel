import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList, Image } from 'react-native';

import api from '../../services/API'

import { useNavigation } from '@react-navigation/native'

import { AntDesign, Feather } from '@expo/vector-icons'

import styles from './styles';

export default function Anxiety() {
  const [ posts, setPosts ] = useState([]) 

  const getAllPosts = async () => {
    const response = await api.get('/post')

    console.log(response.data);
    
    setPosts(response.data)
  }

  useEffect(() => {
    getAllPosts()
  }, [])

  
  const navigation = useNavigation()

  const navigateBack = () => {
    navigation.goBack()
  }

  const handleNavigatePost = (post) => {
    navigation.navigate('post', { post })
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
          <TouchableOpacity  style={styles.menuButton}>
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

      <View style={styles.flatListContainer}/>
        <FlatList 
          data={posts}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.flatList} onPress={() => handleNavigatePost(item)}>
              <View style={styles.flatListItens}>
                <Image style={styles.photo} source={{ uri: item.image_url }}  />
                <View style={styles.informations}>
                  <Text style={styles.owner}>{item.title}</Text>
                  <Text style={styles.postDescription}>{item.description}</Text>
                </View>
              </View>
              <View style={styles.arrow}>
                <Feather name='arrow-right' color='#EC6C6E' size={20}  />
              </View>
            </TouchableOpacity>
          )}
        />
    </View>
  );
}
