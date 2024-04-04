import React, {Component, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import LOGOSVG from "../assets/Logo";
import RightLogo from "../assets/RightLogo";
import LeftLogo from "../assets/LeftLogo";
import tw from 'twrnc';


export default function LogIn ({ navigation }: any) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  function handleUserNameOnChange (name: string) {
    setUserName(name)
  }

  function handleLoginInOnPress () {
    console.log(userName, password)
    navigation.navigate("Home")
  }
  function handlePasswordOnChange (text: string)  {
    setPassword(text)
  }

  function handleSignUpOnPress () {
    navigation.navigate("SignUp")
  }
    return (
      <View style={tw`flex-1 bg-theme.colors.primary justify-center items-center`}>
      <RightLogo style={tw`absolute left-0 top-20`} />
      <LeftLogo style={tw`absolute right-0 top-20`} />
      <LOGOSVG style={tw`absolute top-10`} />
      <Text style={[tw`text-3xl font-bold mb-8`, { color: '#b0c5c5'} ]}>MeowMatch</Text>

      <View style={tw`items-center`}>
        <TextInput style={tw `p-3 mx-30 my-3 m-3`}onChangeText={handleUserNameOnChange} placeholder='username'></TextInput>
        <TextInput style={tw`p-3`} onChangeText={handlePasswordOnChange} placeholder='password' secureTextEntry={true} ></TextInput>

      <TouchableOpacity style={tw`p-35 bg-gray-200 rounded-lg py-3 mb-2 mt-4`} onPress={handleLoginInOnPress}>
          <Text style={tw`text-center`}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`p-35 bg-gray-200 rounded-lg py-3 mb-4 `} onPress={handleSignUpOnPress}>
          <Text style={tw`text-center`}>Sign Up</Text>
        </TouchableOpacity>

      </View>
    </View>
    );
}

