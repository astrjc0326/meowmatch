import React from 'react'
import { View, Text, TouchableOpacity } from "react-native";
import tw from "../lib/tailwind";


const GenderEntry = () => {
  const genders =['Meow', 'Feow', 'Meow&Femeow'];

  const genderSelector = genders.map((gender:any) => (
    <View>
    <View style={tw`w-full border-2 border-gray-400`}></View>
    <View style={tw`bg-white`}>
      <TouchableOpacity >
        <Text style={tw`text-lg font-semibold text-gray-600`}></Text>
      </TouchableOpacity>
    </View>
    <View style={tw`w-full border-2 border-gray-400`}></View>
    </View>
  )

  )
  return (
    {genderSelector}
  )
}

export default GenderEntry
