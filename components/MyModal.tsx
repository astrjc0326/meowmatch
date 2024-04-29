import React, {useState} from "react";
import { View, Text, Button, Modal, TouchableOpacity } from "react-native";
import tw from "../lib/tailwind";
import Settings from "./Settings";
import ProfileSettings from './ProfileSettings';

const myModal = ({ toggleModal, modalVisible }: any) => {
  const [isProfileOnClick, profileOnClick] = useState(true);
  const [isSettingOnClick, settingOnClick] = useState(false);
  const profilebtn = isProfileOnClick
    ? "bg-white text-themecolor"
    : "bg-themecolor text-white";
  const settingbtn = isSettingOnClick
    ? "bg-white text-themecolor"
    : "bg-themecolor text-white";

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={toggleModal}
    >
      <View style={tw`flex-1 justify-center items-center bg-black bg-opacity-50`}
      >
        <View style={tw`flex-1 bg-primary`}>
        <View
        style={tw`flex-1 mt-12 mx-4 bg-themecolor rounded-xl flex-row justify-around items-center rounded-full`}
      >
        <TouchableOpacity
          style={tw`px-10 py-2 rounded-full ${profilebtn}`}
          onPress={() => {
            profileOnClick(true);
            settingOnClick(false);
          }}
        >
          <Text style={tw`text-white font-semibold text-lg ${profilebtn}`}>
            Profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`px-10 py-2 rounded-full ${settingbtn}`}
          onPress={() => {
            settingOnClick(true);
            profileOnClick(false);
          }}
        >
          <Text style={tw`text-white font-semibold text-lg ${settingbtn}`}>
            Setting
          </Text>
        </TouchableOpacity>
      </View>
      <View style={tw`flex-12`}>
      {isSettingOnClick ? <Settings /> : <ProfileSettings />}
          </View>
          </View>
          <Button title="Close" onPress={toggleModal} />
        </View>
    </Modal>
  );
};

export default myModal;
