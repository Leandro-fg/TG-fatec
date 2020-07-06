import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 15,
        color: '#737380'
    },
    headerTextBold: {
        fontWeight: '700'
    },
    title: {
        fontSize: 30,
        marginBottom: 5,
        marginTop: 30,
        color: '#13131a',
        fontWeight: '700'
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380'
    },
    incidentList: {
        marginTop: 32,
    },
    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },
    incidentProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: '700'
    },
    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },
    detailsButton: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    },
    detailsButtonText: {
        color: '#00cc66',
        fontSize: 15,
        fontWeight: '700'
    },
    textInput: {
        height: 30,
        borderWidth:1,
        borderColor: '#cecece',
        marginBottom:15,
        marginHorizontal:10
    },
    action: {
        backgroundColor: '#00cc66',
        borderRadius: 8,
        height: 40,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center', 
    },
    actionText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: '700'
    },
    // contactBox: {
    //     padding: 10,
    //     borderRadius: 8,
    //     backgroundColor: '#FFF',
    //     marginTop: 15,
    // },
    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})