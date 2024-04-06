import React, { Component, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import LOGOSVG from "../assets/Logo";
import RightLogo from "../assets/RightLogo";
import LeftLogo from "../assets/LeftLogo";
import tw from "../lib/tailwind";

export default function LogIn({ navigation }: any) {
  return (
    <View style={tw`flex-1 bg-primary justify-center items-center`}>
      <View style={tw`flex-1 w-full h-2 justify-center items-center`}>
        <RightLogo style={tw`absolute left-0`} />
        <LeftLogo style={tw`absolute right-0`} />
        <LOGOSVG />
        <Text style={tw`text-center text-5xl font-bold pt-1 text-titlecolor`}>
          MeowMatch
        </Text>
      </View>

      <View style={tw`items-center flex-2 pt-8`}>
        <TouchableOpacity
          style={tw`bg-gray-200 p-1 w-11/12 rounded-lg py-3 mb-4`}
          onPress={() => console.log("fb btn on click")}
        >
          <Text style={tw`text-center font-bold`}>Continue with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`font-semibold mb-2 px-4`}
          onPress={() => {
            navigation.navigate("MobileLogin");
          }}
        >
          <Text
            style={tw`text-gray-500 font-semibold px-4 mb-2 text-titlecolor`}
          >
            Use Mobile number
          </Text>
        </TouchableOpacity>
        <Text style={tw`text-gray-500 font-medium mt-2`}>
          Don't worry! We never post to Facebook.
        </Text>
        <View style={tw`flex mt-4 flex-row`}>
          <TouchableOpacity
            onPress={() => console.log("Terms of Service")}
            style={tw`text-gray-500 font-normal mr-2`}
          >
            <Text style={tw`text-gray-500 font-normal mr-2`}>
              Terms of Service
            </Text>
          </TouchableOpacity>
          <Text style={tw`text-gray-500 font-normal`}>|</Text>
          <TouchableOpacity
            onPress={() => console.log("Privacy Policy")}
            style={tw`text-gray-500 font-normal ml-2`}
          >
            <Text style={tw`text-gray-500 font-normal ml-2`}>
              Privacy Policy
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
