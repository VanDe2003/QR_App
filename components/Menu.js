import React from 'react';
import { View, Text } from 'react-native';
import menuStyles from '../styles/menuStyle';

const Menu = () => {
  return (
    <View style={menuStyles.menu}>
     <Text style={menuStyles.loginText}>Đăng Nhập</Text>
        <Text style={menuStyles.resText}>Đăng Ký</Text>
    </View>
  );
};

export default Menu;
