import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import tw from "../lib/tailwind";

export default function Introduce({ navigation }: any) {
  const [isMonPress, setisMonPress] = useState<Boolean>(false);
  const [isFonPress, setisFonPress] = useState<Boolean>(false);
  const optionbtnOnPress = tw`py-1 px-2 border-2 border-gray-600 rounded-xl my-2 bg-primary `;
  const optionbtn = tw`py-1 px-2 border-1 border-gray-400 rounded-xl my-2 bg-white`;
  let onMpressStyle = isMonPress ? optionbtnOnPress : optionbtn;
  let onFpressSytle = isFonPress ? optionbtnOnPress : optionbtn;
  useEffect(() => {}, [isMonPress]);

  return (
    <View style={tw`flex-1 content-center items-center algin-center w-screen`}>
      <Text
        style={tw`text-center content-center text-gray-400 text-2xl font-semibold mt-10 pt-2`}
      >
        Introduce yourself!
      </Text>
      <Text style={tw`text-gray-600 my-2 text-base text-center`}>
        Fill out the rest of your details so meows know a little more about you.
      </Text>
      <View style={tw`align-left px-3`}>
        <Text style={tw`my-2 text-lg text-gray-400`}>I identify as a ....</Text>
        <TouchableOpacity
          style={onFpressSytle}
          onPress={() => {
            setisFonPress(true);
            setisMonPress(false);
          }}
        >
          <Text style={tw`text-lg font-bold text-gray-400`}>Femeow</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={onMpressStyle}
          onPress={() => {
            setisMonPress(true);
            setisFonPress(false);
          }}
        >
          <Text style={tw`font-bold text-gray-400 text-lg`}>Meow</Text>
        </TouchableOpacity>
        <Text style={tw`font-bold text-gray-400 text-lg`}>Birthday</Text>
        <TextInput
          placeholder="MM/DD/YYYY"
          keyboardType="numeric"
          placeholderTextColor="#DEDADA"
          maxLength={8}
          style={tw`h-12 text-lg my-1 py-1 px-2 border border-gray-400 rounded-lg`}
        ></TextInput>
        <Text style={tw`font-bold text-gray-400 text-lg`}>Name</Text>
        <TextInput
          placeholder="Add your first name"
          placeholderTextColor="#DEDADA"
          maxLength={20}
          style={tw`h-12 text-lg my-1 py-1 px-2 border border-gray-400 rounded-lg`}
        ></TextInput>
        <View style={tw`items-center mt-3`}>
          <TouchableOpacity
            style={tw` rounded-3xl bg-primary `}
            onPress={() => navigation.navigate("AddPhoto")}
          >
            <Text
              style={tw`text-center text-base font-semibold text-gray-600 my-3
          `}
            >
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  optiontxt: {
    color: "#6a6767",
    fontSize: 20,
    fontWeight: "400",
  },
  optionbtn: {
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderColor: "#6a6767",
    borderWidth: 0.5,
    borderRadius: 10,
    marginVertical: 3,
  },
  optionbtnOnPress: {
    paddingVertical: 6,
    paddingHorizontal: 8,
    backgroundColor: "#e9f5f5",
    borderColor: "#e9f5f5",
    borderWidth: 0.5,
    borderRadius: 10,
    marginVertical: 3,
  },
  input: {
    height: 50,
    fontSize: 20,
    marginVertical: 4,
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderColor: "#6a6767",
    borderWidth: 0.5,
    borderRadius: 10,
  },
  btn: {
    width: "100%",
    alignContent: "center",
    backgroundColor: "#e9f5f5",
    borderRadius: 30,
    marginTop: "3%",
  },
  btntxt: {
    width: "100%",
    fontWeight: "600",
    textAlign: "center",
    borderRadius: 30,
    marginVertical: 15,
  },
});
