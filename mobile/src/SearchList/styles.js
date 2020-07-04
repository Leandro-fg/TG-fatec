import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },
   textInput: {
       height: 30,
       borderWidth:1,
       borderColor: '#cecece',
       marginBottom:15,
       marginHorizontal:10
   }
})