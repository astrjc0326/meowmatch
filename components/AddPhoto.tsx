import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import DefaultProfile from "../assets/DefaultProfilePhoto";
import tw from "twrnc";

export default function AddPhoto({ navigation }: any) {
  return (
    <View
      style={[tw`bg-white mx-30 flex-1 items-center align-center bg-inherit`]}
    >
      <View>
        <DefaultProfile />
      </View>
      <Text style={[tw`my-2 text-base text-center`, { color: "#6a6767" }]}>
        Let's build your photo
      </Text>
      <TouchableOpacity
        style={[
          tw`w-4/5 items-center rounded-lg mt-4`,
          { backgroundColor: "#e9f5f5" },
        ]}
        onPress={() => navigation.navigate("ProfileCamera")}
      >
        <Text style={tw`font-semibold text-center rounded-full my-3 `}>
          Add a photo
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          tw`items-center rounded-lg mt-4 w-4/5`,
          { backgroundColor: "#e9f5f5" },
        ]}
        onPress={() => navigation.navigate("SelfIntroduction")}
      >
        <Text style={tw`"w-full font-semibold text-center rounded-full my-3 `}>
          Skip
        </Text>
      </TouchableOpacity>
    </View>
  );
}
