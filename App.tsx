import React, {Component} from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import { useState, useEffect } from 'react'
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import MobileLogin from './components/MobileLogin';
import Introduce from './components/Introduce';
import Setting from './components/Settings';
import Home from './components/Home';
import ProfileCamera from './components/ProfileCamera'
import SelfIntroduction from './components/SelfIntroduction';
import AddPhoto from './components/AddPhoto';


const Stack = createNativeStackNavigator();

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginIn" component={LogIn}></Stack.Screen>
        <Stack.Screen name="SignUp" component={SignUp}></Stack.Screen>
        <Stack.Screen name="MobileLogin" component={MobileLogin}></Stack.Screen>
        <Stack.Screen name="Introduce" component={Introduce}></Stack.Screen>
        <Stack.Screen name="Setting" component={Setting}></Stack.Screen>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="SelfIntroduction" component={SelfIntroduction}></Stack.Screen>
        <Stack.Screen name="AddPhoto" component={AddPhoto}></Stack.Screen>

        {/* <Stack.Screen name="ProfileCamera" component={ProfileCamera}></Stack.Screen> */}


      </Stack.Navigator>
  </NavigationContainer>
  )
//   <NavigationContainer>
//   <Stack.Navigator initialRouteName="LogIn">
//     <Stack.Screen name="LogIn" component={LogIn} />
//     <Stack.Screen name="MobileLogin" component={MobileLogin} />
//   </Stack.Navigator>
// </NavigationContainer>

  // const [page, setpage] = useState<string>('homelogin');
  // useEffect(() => {}, [page])
  // let currPage = <LogIn setpage={setpage}/>
  // switch(page) {
  //   case ("homelogin"):
  //     currPage = <LogIn setpage={setpage}/>
  //     break;
  //   case ("mobilelogin"):
  //     currPage = <MobileLogin setpage={setpage}/>
  //     break;
  //   case ("introduce"):
  //     currPage = <Introduce setpage={setpage}/>
  //     break;
  // }
  // useEffect(() => {

  // }, [page, setpage])
  //   return (
  //   <>
  //     {currPage}
  //   </>
  //   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
