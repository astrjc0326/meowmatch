import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Switch, Image } from "react-native";
import Setting from "../assets/Setting";
import tw from "../lib/tailwind";


function ProfileSettings() {
  return (
    <View style={tw`flex-1 w-screen bg-primary items-center`}>
              <View style={tw`w-40 h-40 rounded-full overflow-hidden mt-6`}>
          <Image
            source={{ uri: "https://i.ibb.co/WWc08LY/f4f881bf08a8.jpg" }}
            style={tw`h-full`}
          />
        </View>
        <View style={tw`items-end bottom-7 bg-transparent px-2 left-10`}>
          <TouchableOpacity
            style={tw`rounded-full bg-primary `}
            // onPress={toggleModal}
          >
            <Setting style={tw`h-8 w-8`} />
          </TouchableOpacity>
        </View>




    </View>
  )
}

export default ProfileSettings
