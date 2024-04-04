import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

export default function MobileLogin( {navigation}: any ) {
  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <TouchableOpacity style={tw`absolute left-2 top-3.5 m-5`} >
        <Text style={tw`text-gray-600 text-lg`}>X</Text>
      </TouchableOpacity>
      <View style={tw`absolute top-10 w-full items-center`}>
      <Text style={tw`absolute top-6 text-secondary text-xl font-semibold text-gray-500`}>What's your number?</Text>
      <Text style={tw`absolute top-15 text-gray-500 mx-8`}>Whether you're creating an account or signing back in, let's start with your number</Text>

      <View style={tw`absolute flex-row top-25`}>
        <Text style={tw`text-gray-500 text-2xl mt-1 mr-1`}>+1</Text>
        <View style={tw`w-4/5 border-4 border-gray-400 rounded-2xl`}>
          <TextInput keyboardType="number-pad" placeholder="Phone number" placeholderTextColor="#DEDADA" maxLength={10} style={tw`ml-2 text-xl`} />
        </View>
      </View>

      <TouchableOpacity style={[tw`absolute top-35 rounded-3xl py-3 px-12 mt-3`,{ backgroundColor: '#e9f5f5'}]} onPress={() => navigation.navigate("Introduce")}>
        <Text style={tw`text-m font-semibold text-gray-600`}>Continue</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

