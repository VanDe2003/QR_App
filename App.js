import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import appStyle from './styles/appStyle';
import Menu from './components/Menu';
import BtnLogin from './components/BtnLogin'
import FormLogin from './components/FormLogin';
import LogoComponent from './components/LogoComponent';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={appStyle.container}>
        <LogoComponent />
        <Menu />
        <FormLogin />
        <BtnLogin />
      <StatusBar style="auto" />
    </View>
  );
}
