  import { StyleSheet } from 'react-native';
  import { Dimensions } from 'react-native';
  
  const windowHeight = Dimensions.get('window').height;
  
  const menuStyles  = StyleSheet.create({ 
    menu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
        paddingHorizontal: 16,
        marginTop: 15,
        marginBottom: 15,
      },

      resText: {
        fontSize: 18,
      },
    
    
      loginText: {
        fontSize: 18,
      },
    
  });
  
  export default menuStyles;