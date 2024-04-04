import React, {Component, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import LOGOSVG from "../assets/Logo";
import RightLogo from "../assets/RightLogo";
import LeftLogo from "../assets/LeftLogo";
import tw from 'twrnc';



export default function LogIn ({navigation}: any) {
    return (
      <View style={tw`flex-1 bg-theme.colors.primary justify-center items-center`}>
      <RightLogo style={tw`absolute left-0 top-20`} />
      <LeftLogo style={tw`absolute right-0 top-20`} />
      <LOGOSVG style={tw`absolute top-10`} />
      <Text style={[tw`text-3xl font-bold mb-8`, { color: '#b0c5c5'} ]}>MeowMatch</Text>

      <View style={tw`items-center`}>


        <TouchableOpacity style={tw`bg-gray-200 p-1 w-11/12 rounded-lg py-3 mb-4`} onPress={() => console.log('fb btn on click')}>
          <Text style={tw`text-center font-bold`}>Continue with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`font-semibold mb-2 px-4`} onPress={() => { navigation.navigate('MobileLogin') }}>
          <Text style={[tw`text-gray-500 font-semibold px-4 mb-2`, {color: '#B0C5C5'}]}>Use Mobile number</Text>
        </TouchableOpacity>
        <Text style={tw`text-gray-500 font-medium mt-2`}>Don't worry! We never post to Facebook.</Text>
        <View style={tw`flex mt-4 flex-row`}>
          <TouchableOpacity onPress={() => console.log('Terms of Service')} style={tw`text-gray-500 font-normal mr-2`}>
            <Text style={tw`text-gray-500 font-normal mr-2`}>Terms of Service</Text>
          </TouchableOpacity>
          <Text style={tw`text-gray-500 font-normal`}>|</Text>
          <TouchableOpacity onPress={() => console.log('Privacy Policy')} style={tw`text-gray-500 font-normal ml-2`}>
            <Text style={tw`text-gray-500 font-normal ml-2`}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, //flex-1
//     backgroundColor: "#e9f5f5",
//     alignItems: "center", // align-center
//     justifyContent: "center", // items-center
//   },
//   title: {
//     alignContent: "center",
//     textAlign: "center",
//     width: "90%",
//     padding: "1%",
//     color: "#b0c5c5",
//     fontSize: 55,
//     fontWeight: "700",
//     position: "absolute",
//     top: "35%"
//   },
//   logo: {
//     position: "absolute",
//     top: "10%"
//   },
//   rightlogo: {
//     position: "absolute",
//     left: 0,
//     top: "20%"
//   },
//   leftlogo: {
//     position: "absolute",
//     right: 0,
//     top: "20%"
//   },
//   login: {
//     alignItems: "center",
//     position: "absolute",
//     bottom: "20%",
//   },
//   otherbtn:{
//     // position: "absolute",
//     // bottom: "25%"
//   },
//   row: {
//     flexDirection: 'row'
//   }
//   ,
//   otheroption: {
//     fontWeight: "600",
//     color: "#b0c5c5",
//   },
//   fbbtn: {
//     // position: "absolute",
//     // bottom: "30%",
//     width: "95%",
//     backgroundColor:'#e8e5e5',
//     borderRadius: 30,
//     marginTop: 30,
//     marginHorizontal: 20,

//   },
//   fbbtntext: {
//     fontWeight: "600",
//     borderRadius: 30,
//     marginVertical: 15,
//     marginHorizontal: 85,
//   },
//   term: {
//     color: "#b0c5c5",
//     fontWeight: "300",
//     textDecorationLine: "underline",
//   },
//   announce: {
//     color: "#b0c5c5",
//     fontWeight: "500",
//     marginTop: 40
//   }
// });
