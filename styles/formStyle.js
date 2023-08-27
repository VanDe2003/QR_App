import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

const formStyles  = StyleSheet.create({ 
    formLogin: {
        justifyContent: 'space-around',
        marginTop: windowHeight * 0.03,
      },
      input: {
        width: '80%',
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'transparent',
        backgroundColor: '#F2F2F2',
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
      imgUser: {
        flexDirection: 'row', 
        alignItems: 'center',
        width: 28,
        height: 28,
        marginRight: 15,
      },
    
      imgPass: {
        flexDirection: 'row', 
        alignItems: 'center',
        width: 28,
        height: 28,
        marginRight: 15,
      },
    
      username: {
         flex: 1,
         marginRight: 5,
         fontSize: 18,
      },
    
      pass: {
        flex: 1,
        marginRight: 5,
        fontSize: 18,
      },
});

export default formStyles;