import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList, Image } from 'react-native';

import api from '../../services/API'

import { useNavigation } from '@react-navigation/native'

import { AntDesign, Feather } from '@expo/vector-icons'

import styles from './styles';


// Images
import Neto from './assets/neto.jpg'
import Amanda from './assets/amanda.jpeg'
import Douglas from './assets/douglas.jpg'
import Gab from './assets/gab.png'
import Victor from './assets/victor.png'
import Ansiedade from './assets/ansiedade.jpg'

export default function Anxiety() {
  const [ posts, setPosts ] = useState([]) 

  const getAllPosts = async () => {
    const response = await api.get('/post')

      console.log(response.data);
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

  const data = [
    {
      id: 1,
      name: "Neto Domingos",
      photo: Neto,
      postTitle: "How to Manage Anxiety",
      postDescription: "Self-Care for Anxiety: Create a Nourishing Practice",
      postd: 1,
      bigDescriptionPost: "I have had anxiety for almost as far back as I can remember. In 6th grade, I vaguely remember my mom taking me to the doctor for the stomach aches that would, without fail, occur every morning before school.",
      postImage: Ansiedade
    },
    {
      id: 2,
      name: "Douglas Carvalho",
      photo: Douglas,
      postTitle: "Post Teste",
      postDescription: "Descrição um pouco longa e informal do post",
      postd: 2,
      post: "daleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
    },
    {
      id: 3,
      name: "Gabriel Almeida",
      photo: Gab,
      postTitle: "Post Teste",
      postDescription: "Descrição um pouco longa e informal do post",
      postd: 3,
      post: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      id: 4,
      name: "Amanda Souza",
      photo: Amanda,
      postTitle: "Post Teste",
      postDescription: "Descrição um pouco longa e informal do post",
      postd: 4,
      post: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
    id: 5,
      name: "Pedro Victor",
      photo: Victor,
      postTitle: "Post Teste",
      postDescription: "Descrição um pouco longa e informal do post",
      postd: 5,
      post: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      id: 6,
      name: "Neto Domingos",
      photo: Neto,
      postTitle: "Post Teste",
      postDescription: "Descrição um pouco longa e informal do post",
      postd: 6,
      post: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      id: 7,
      name: "Douglas Carvalho",
      photo: Douglas,
      postTitle: "Post Teste",
      postDescription: "Descrição um pouco longa e informal do post",
      postd: 7,
      post: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      id: 8,
      name: "Gabriel Almeida",
      photo: Gab,
      postTitle: "Post Teste",
      postDescription: "Descrição um pouco longa e informal do post",
      postd: 8,
      post: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      id: 9,
      name: "Amanda Souza",
      photo: Amanda,
      postTitle: "Post Teste",
      postDescription: "Descrição um pouco longa e informal do post",
      postd: 9,
      post: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
    id: 10,
      name: "Pedro Victor",
      photo: Victor,
      postTitle: "Post Teste",
      postDescription: "Descrição um pouco longa e informal do post",
      postd: 10,
      post: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
  ]

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

      <View style={styles.flatListContainer}/>
        <FlatList 
          keyExtractor={item => String(item.id)}
          data={data}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.flatList} onPress={() => handleNavigatePost(item)}>
              <View style={styles.flatListItens}>
                <Image style={styles.photo} source={item.photo}  />
                <View style={styles.informations}>
                  <Text style={styles.owner}>{item.postTitle}</Text>
                  <Text style={styles.postDescription}>{item.postDescription}</Text>
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
