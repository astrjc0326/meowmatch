import React, {useState} from 'react';
import {View, TouchableOpacity, Text, TextInput, StyleSheet} from 'react-native';
import styles from '../assets/styles'

export default function SelfIntroduction({setpage}: any) {
  const [selfintro, setselfintro] = useState('')
  return (
  <View style={stylesheet.container}>
    <Text style={{...stylesheet.heading}}>Introduce Yourself</Text>
    <Text style={styles.description}>What do you like to do...</Text>
    <TextInput style={stylesheet.txtinput}
    multiline={true}
    numberOfLines={5}
    value={selfintro}
    onChangeText={setselfintro}
    />
    <TouchableOpacity style={styles.btn}>
      <Text style={styles.btntxt} onPress={
        (e) => {
          setpage('home')
        }}>
        Continue
      </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.btn} onPress={() => setpage('home')}>
      <Text style={styles.btntxt}>
        Skip
      </Text>
    </TouchableOpacity>
    <View style={{flex: 5}}></View>
  </View>
  )
}

const stylesheet = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 12,
    justifyContent: 'center',
    alignContent: 'center',
  },
  heading: {
    marginTop: 40,
    paddingLeft: 10,
    fontSize: 25,
    color: '#b0c5c5',
    fontWeight: '600',
    textAlign: 'center'
  },
  txtinput: {
    borderColor: 'grey',
    borderStyle: 'solid',
    borderWidth: 3,
    width: "100%",
    flex: 2,
    marginVertical: 10,
  },
  btn: {
    backgroundColor: "#c9eded",
    borderRadius: 120,
    width: '90%',
    marginVertical: 4
  },
  btntxt: {
    width: "100%",
    fontWeight: "600",
    textAlign: "center",
    borderRadius: 30,
    marginVertical: 15,
    color: 'white',

  }

})