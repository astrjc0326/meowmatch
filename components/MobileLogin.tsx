import { Text, View, TextInput, TouchableOpacity } from "react-native";
import tw from "../lib/tailwind";

export default function MobileLogin({ navigation }: any) {
  return (
    <View style={tw`flex-1 mt-18`}>
      <View style={tw` w-full items-center`}>
        <Text style={tw` text-secondary text-xl font-semibold text-gray-500`}>
          What's your number?
        </Text>
        <Text style={tw` text-gray-500 mx-8 mt-4`}>
          Whether you're creating an account or signing back in, let's start
          with your number
        </Text>

        <View style={tw`flex flex-row pt-3`}>
          <Text style={tw`text-gray-500 text-2xl mt-1 mr-1`}>+1</Text>
          <View style={tw`w-4/5 border-4 border-gray-400 rounded-2xl`}>
            <TextInput
              keyboardType="number-pad"
              placeholder="Phone number"
              placeholderTextColor="#DEDADA"
              maxLength={10}
              style={tw`ml-2 text-xl`}
            />
          </View>
        </View>

        <TouchableOpacity
          style={tw` w-full rounded-3xl py-3 px-12 mt-5 bg-primary`}
          onPress={() => navigation.navigate("Introduce")}
        >
          <Text style={tw`text-base font-semibold text-gray-600 text-center`}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
