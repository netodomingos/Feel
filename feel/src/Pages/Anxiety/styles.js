import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1B1C2E'
    },

    content: {
        marginTop: Constants.statusBarHeight + 40,
        marginHorizontal: 40,
    },

    button:{
        alignItems: 'flex-end'
    },

    title: {
        color: '#FFF',
        fontSize: 60,
        fontWeight: "bold",
    },
    
    description: {
        color: '#DDD',
        marginTop: 5,
        fontSize: 15

    },
    topic: {
        marginTop: 40,
        marginHorizontal: 20,
        color: '#FFF',
        fontSize: 25,
        fontWeight: "bold"
    },
    
    scrollViewContainer: {
        
    },

    menuButton: {
        marginHorizontal: 10,
    },

    menuItem: {
        backgroundColor: '#EC6C6E',
        padding: 15,
        borderRadius: 8,
        color: '#FFF',
        fontWeight: "bold",
        fontSize: 18
    }
})