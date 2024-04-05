import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";
import tw from "./lib/tailwind";

export default function SelfIntroduction({ navigation }: any) {
  return (
    <View style={tw`align-center flex-1 items-center w-screen`}>
      <Text
        style={tw`mt-10 pl-4 text-2xl text-gray-400 font-semibold text-center`}
      >
        Introduce Yourself
      </Text>
      <Text style={tw`py-2 text-base align-center text-gray-400`}>
        What do you like to do...
      </Text>
      <TextInput
        style={tw`w-3/4 border-2 border-gray-400 h-1/4	`}
        multiline={true}
        numberOfLines={5}
      />
      <TouchableOpacity
        style={[tw`rounded-lg w-3/4 mt-2`, { backgroundColor: "#e9f5f5" }]}
      >
        <Text
          style={tw`w-full font-semibold text-center rounded-full my-3`}
          onPress={() => navigation.navigate("Home")}
        >
          Continue
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={tw`rounded-lg w-3/4 mt-2 bg-primary`}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={tw`-full font-semibold text-center rounded-full my-3`}>
          Skip
        </Text>
      </TouchableOpacity>
      <View style={tw`flex-5`}></View>
    </View>
  );
}
