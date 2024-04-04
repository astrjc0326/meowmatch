import React, {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../assets/styles';
import DefaultProfile from '../assets/DefaultProfilePhoto';

export default function AddPhoto ({navigation}: any) {

  return (
    <View style={{...styles.container,
    ...stylesheet.bkground, ...stylesheet.container}}>
      <View >
      <DefaultProfile />
      </View>
      <Text style={styles.description}>Let's build your photo</Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("ProfileCamera")}>
        <Text style={styles.btntxt}>Add a photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("SelfIntroduction")}>
        <Text style={styles.btntxt}>Skip</Text>
      </TouchableOpacity>

    </View>
  )
}

let stylesheet = StyleSheet.create({
  container: {
    marginHorizontal: 10
  },
  bkground: {
    backgroundColor: "white"
  },
  // profile: {
  //   position: "absolute",
  //   top: "30%"
  // },
  logo: {
    position: "absolute",
    top: "10%",
  },
})


