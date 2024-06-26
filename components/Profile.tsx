import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
} from "react-native";
import Setting from "../assets/Setting";
import MyModal from "./MyModal";

import tw from "../lib/tailwind";

export default function Profile() {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={tw`flex-1 items-center justify-center bg-primary`}>
      <View style={tw`flex-1`}>
        <View style={tw`w-40 h-40 rounded-full overflow-hidden`}>
          <Image
            source={{ uri: "https://i.ibb.co/WWc08LY/f4f881bf08a8.jpg" }}
            style={tw`h-full`}
          />
        </View>
        <View style={tw`items-end bottom-7 bg-transparent px-2`}>
          <TouchableOpacity
            style={tw`rounded-full bg-primary `}
            onPress={toggleModal}
          >
            <Setting style={tw`h-8 w-8`} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={tw`flex-3 mt-5 flex-col items-center`}>
        <View style={tw`flex-row items-center content-center`}>
          <Text style={tw`text-3xl font-bold text-gray-600 mt-10`}>Ddangkong</Text>
          <Text style={tw`text-xl ml-3 text-gray-500`}>3y3m</Text>
        </View>
        <View style={tw`p-2 mx-2`}>
          <Text style={tw`text-2xl text-gray-600`}>
            My name is Ddangkong. I really like to bite.
          </Text>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <MyModal modalVisible={modalVisible} toggleModal={toggleModal} />
      </View>
    </View>
  );
}
