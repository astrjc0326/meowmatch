import React from "react";
import { View, Text, Image } from "react-native";
import tw from "../lib/tailwind";

export default function SwipCats() {
  return (
    <View style={tw`w-full h-full flex-1`}>
      <View style={tw`flex-8`}>
      <Image source={{uri: 'https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}} style={tw`w-full h-full`}/>
      </View>
      <View style={tw`flex-1`}>
      <Text style={tw`text-bold text-gray-500 text-xl text-center`}>Meowow</Text>
      </View>
    </View>
  );
}
