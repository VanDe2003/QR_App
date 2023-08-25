import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import appStyle from './styles/appStyle';

export default function App() {
  return (
    <View style={appStyle.container}>
        {/*Logo*/}
        <Image
             source={require('./assets/images/logo.png')}
             style={appStyle.image}
        />

         {/*Title Login | Res*/}
      <View style={appStyle.titleLogin}>
        <Text style={appStyle.loginText}>Đăng Nhập</Text>
        <Text style={appStyle.resText}>Đăng Ký</Text>
      </View>

      <View style={appStyle.parentLine}>
        <Text style={appStyle.line}>s</Text>
      </View>

      {/*Input Username*/}
      <View style={appStyle.input}>
        <Image
          source={require('./assets/images/ic-user.png')}
          style={appStyle.imgUser}
        />

        <TextInput
          style={appStyle.username}
          placeholder="Tài Khoản"
        />
      </View>

      {/*Input Password*/}
      <TextInput
        style={appStyle.input}
        placeholder="Mật Khẩu"
        secureTextEntry
      />

      {/*Button Login*/}
      <Button title="Đăng Nhập" onPress={() => alert("Logged in")} />
      <StatusBar style="auto" />
    </View>
  );
}
