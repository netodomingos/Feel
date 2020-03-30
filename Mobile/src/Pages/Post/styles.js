import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import { FontAwesome } from '@expo/vector-icons'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1B1C2E',
    },

    photoContainer: {
        borderWidth: 2,
        borderBottomWidth: 2,
        borderBottomColor: '#EC6C6E'
    },

    postImage: {
        width: '100%',
        height: 250
    },

    arrow: {
        position: 'absolute',
        zIndex: 2,
        marginTop: Constants.statusBarHeight + 20,
        marginLeft: 20
    },

    title: {
        textAlign: 'center',
        fontSize: 25,
        color: '#EC6C6E',
        marginTop: 20,
        fontWeight: 'bold'
    },

    description: {
        textAlign: 'center',
        marginTop: 10,
        marginHorizontal: 15,
        fontSize: 20,
        color: "#FFF"
    },

    bigDescription: {
        marginTop: 20,
        color: "#DDD",
        fontSize: 18,
        marginHorizontal: 15,
        textAlign: 'center'
    }

})