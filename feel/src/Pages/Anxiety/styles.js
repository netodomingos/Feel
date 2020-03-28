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

    title: {
        color: '#FFF',
        fontSize: 60,
        fontWeight: "bold",
    },
    
    description: {
        color: '#DDD',
        marginTop: 5,
        fontSize: 15

    }
})