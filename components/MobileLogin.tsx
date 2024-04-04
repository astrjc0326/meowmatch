import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
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

      <TouchableOpacity style={[tw`absolute top-35 bg-theme.colors.primary rounded-3xl py-3 px-12 mt-3`,{ backgroundColor: '#e9f5f5'}]} onPress={() => navigation.navigate("Introduce")}>
        <Text style={tw`text-xl font-semibold text-grey-200`}>Continue</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   button: {
//     postion: "absolute",
//     top: "-10%",
//     backgroundColor: "#e9f5f5",
//     borderRadius: 30,
//     // marginTop: 30,
//     // marginHorizontal: 85,

//   },
//   btnText: {
//     fontWeight: "600",
//     borderRadius: 30,
//     paddingVertical: 15,
//     paddingHorizontal: 150,
//   },
//   phoneviewcontainer: {
//     // position: "absolute",
//     // top: "30%",
//     width: '80%',
//     height: 40,
//     fontSize : 20,
//     fontWeight : 'bold',
//     borderColor : 'grey',
//     borderWidth : 4,
//     borderRadius : 7,
//   },
//   numberInput: {
//     position: "relative",
//     width: "100%",
//     height: "100%",
//     fontSize: 20,
//     marginLeft: 10
//   },
//   title: {
//     position: "absolute",
//     top: "8%",
//     color: "#b0c5c5",
//     fontSize: 25,
//     fontWeight: "600"
//   },
//   countrycode: {
//     color: "#6a6767",
//     fontSize: 20,
//     marginTop : 9,
//     marginRight: 9
//   },
//   phoneinput: {
//     flexDirection: 'row',
//     position: "absolute",
//     top: "25%",

//   },
//   description: {
//     position: "absolute",
//     top: "15%",
//     marginHorizontal: 30,
//     color: "#6a6767"
//   },
//   exitbtn: {
//     position: "absolute",
//     left: "2%",
//     top: "3.5%",
//     margin: 5
//   },
//   exittext: {
//     color: "#6a6767"
//   }
// })