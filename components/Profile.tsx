import React, {useState, useEffect} from 'react';
import {View, Text,TouchableOpacity, Image, StyleSheet} from 'react-native';
import Cat from '../assets/Cat';
import styles from '../assets/styles';

export default function Profile() {
  return(
    <View style={styles.container}>
    <Cat style={stylesheet.photo}/>
    <View style={stylesheet.row}>
    <Text style={stylesheet.name}>Ddangkong</Text>
    <Text style={stylesheet.age}>3y3m</Text>
    </View>
    </View>
  )

}

const stylesheet = StyleSheet.create ({
  photo: {
    marginTop: 50
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'space-around',
    justifyContent: 'space-around',
  },
  footer: {
    position: 'absolute',
    bottom: '2%',

  },
  name: {
    fontSize: 30,
    fontWeight: '500',
  },
  age: {
    fontSize: 30,
    marginLeft: 5
  },
  svg: {
    margin: 10
  },
  paddingtop: {
    marginTop: 5
  }
})