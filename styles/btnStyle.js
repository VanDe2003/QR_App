import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

const btnStyles  = StyleSheet.create({ 
    btnLogin: {
        backgroundColor: '#3394FE',
        width: 138,
        height: 45,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: windowHeight * 0.035,
    },

    btnText: {
        color: 'white',
        fontSize: 18
    },
});

export default btnStyles;