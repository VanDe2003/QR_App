import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import btnStyles from '../styles/btnStyle';

const CustomButton = () => {
  return (
    <TouchableOpacity
      style={[btnStyles.btnLogin]} 
      onPress={() => alert("Logged in")}
    >
      <Text style={btnStyles.btnText}>Đăng Nhập</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
