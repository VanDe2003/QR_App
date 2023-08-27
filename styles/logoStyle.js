import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

const logoStyles  = StyleSheet.create({ 
    image: {
        width: 105,
        height: 105,
    },
});

export default logoStyles;