import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: windowHeight * 0.15,
  },

  input: {
    width: '80%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: '#F2F2F2'
  },

  titleLogin: {
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-around',
    height: windowHeight * 0.04,
    marginTop: windowHeight * 0.03,
  },

  resText: {
    fontSize: 18,
  },


  loginText: {
    fontSize: 18,
  },

  parentLine: {
    width: '60%',
    marginBottom: windowHeight * 0.05,
  },

  line: {
    height: 4,
    width: '53%',
    backgroundColor: '#00A3FF',
    alignItems: 'left'
  },

  image: {
    width: 105,
    height: 105,
  },

  imgUser: {
    flexDirection: 'row', 
    alignItems: 'center',
  },

  username: {
     flex: 1,
    height: 40,
  }
});

export default appStyles;
