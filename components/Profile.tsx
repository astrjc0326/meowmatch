import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground } from "react-native";
import Cat from "../assets/Cat";
import tw from "../lib/tailwind";

export default function Profile() {
  return (
    <View
      style={tw`flex-1 items-center justify-center bg-primary`}
    >
    <View style={tw`w-40 h-40 rounded-full overflow-hidden`}>
       <Image source={{uri: 'https://i.ibb.co/WWc08LY/f4f881bf08a8.jpg'}} style={tw`h-full`} />
       </View>

      {/* <Cat style={tw`mt-5 `} /> */}
      <View style={tw`flex-1 flex-row content-around justify-around`}>
        <Text style={tw`text-xl text-bold`}>Ddangkong</Text>
        <Text style={tw`text-xl ml-3`}>3y3m</Text>
      </View>
    </View>
  );
}
