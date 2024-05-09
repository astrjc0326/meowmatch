import React from "react";
import { View, Text, Image } from "react-native";
import tw from "../lib/tailwind";



export default function Chat() {
  return (
    <View style={tw`flex-1 justify-items-start border-2 w-full p-2 `}>
      <View style={tw`flex-1 `}>
        <View style={tw`w-15 h-15 rounded-full overflow-hidden`}>
          <Image
            source={{ uri: "https://i.ibb.co/WWc08LY/f4f881bf08a8.jpg" }}
            style={tw`h-full`}
          />
        </View>
      </View>
    </View>
  );
}
