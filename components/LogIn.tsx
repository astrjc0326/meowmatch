import React, { useState } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import LOGOSVG from "../assets/Logo";
import RightLogo from "../assets/RightLogo";
import LeftLogo from "../assets/LeftLogo";
import tw from "../lib/tailwind";

export default function LogIn({ navigation }: any) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  function handleUserNameOnChange(name: string) {
    setUserName(name);
  }

  function handleLoginInOnPress() {
    console.log(userName, password);
    navigation.navigate("Home");
  }
  function handlePasswordOnChange(text: string) {
    setPassword(text);
  }

  function handleSignUpOnPress() {
    navigation.navigate("SignUp");
  }
  return (
    <View style={tw`bg-primary flex-1 justify-center items-center w-full`}>
      <View style={tw`flex-1 w-full h-2 justify-center items-center mt-10`}>
        <RightLogo style={tw`absolute left-0`} />
        <LeftLogo style={tw`absolute right-0`} />
        <LOGOSVG />
        <Text style={tw`text-center text-5xl font-bold pt-1 text-titlecolor`}>
          MeowMatch
        </Text>
      </View>
      <View style={tw`flex-1 items-center w-full flex-3 p-4 pt-10`}>
        <TextInput
          style={tw`px-2 mx-30  w-3/4 text-base h-11  text-left border-2 border-gray-200 rounded-lg bg-white  justify-center`}
          onChangeText={handleUserNameOnChange}
          placeholder="username"
        ></TextInput>
        <TextInput
          style={tw`px-2 mx-30 w-3/4 text-base h-11  text-left border-2 border-gray-200 rounded-lg bg-white m-2 justify-center`}
          onChangeText={handlePasswordOnChange}
          placeholder="password"
          secureTextEntry={true}
        ></TextInput>

        <TouchableOpacity
          style={tw`w-4/5 rounded-full py-3 mb-2 bg-themecolor`}
          onPress={handleLoginInOnPress}
        >
          <Text style={tw`font-bold text-center text-gray-600 `}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`w-4/5 bg-gray-500 rounded-full py-3 mb-2`}
          onPress={handleSignUpOnPress}
        >
          <Text style={tw`font-bold text-center text-themecolor `}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
