import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, View, Text, TextInput } from 'react-native';
import formStyles from '../styles/formStyle';

const TitleForm = () => {
  return (
    <View style={formStyles.formLogin}>

      <View style={formStyles.input}>
        <Image
          source={require('../assets/images/ic-user.png')}
          style={formStyles.imgUser}
        />

        <TextInput
          style={formStyles.username}
          placeholder="Tài Khoản"
        />
      </View>

      {/* Input Password */}
      <View style={formStyles.input}>
        <Image
          source={require('../assets/images/ic-pass.png')}
          style={formStyles.imgPass}
        />

        <TextInput
          style={formStyles.pass}
          placeholder="Mật Khẩu"
          secureTextEntry
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default TitleForm;
