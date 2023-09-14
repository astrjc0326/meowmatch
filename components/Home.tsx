import React, {useState, useEffect} from 'react';
import {View, Text,TouchableOpacity, StyleSheet} from 'react-native';
import Profile from './Profile';
import Profileicon from '../assets/Profileicon';
import styles from '../assets/styles';
import Swipcaticon from '../assets/Swipcaticon';
import Chaticon from '../assets/Chaticon';
import Love from '../assets/Love';

export default function Home() {
  const [profileonclick, profilesetonclick] = useState(false);
  useEffect(()=>{}, [profileonclick])
  const currpage = <Profile />
  return(
    <View style={styles.container}>
      {currpage}
    <View style={{...stylesheet.row, ...stylesheet.footer}}>
      <TouchableOpacity style={stylesheet.svg}>
        <Profileicon />
      </TouchableOpacity>
      <TouchableOpacity style={stylesheet.svg}>
        <Swipcaticon />
      </TouchableOpacity>
      <TouchableOpacity style={stylesheet.svg}>
        <View style={stylesheet.paddingtop}></View>
        <Chaticon />
      </TouchableOpacity>
      <TouchableOpacity style={stylesheet.svg}>
        <Love />
      </TouchableOpacity>

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