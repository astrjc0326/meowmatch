import React from 'react';
import {ImageBackground, StyleSheet, View, Text} from 'react-native';

export default function SwipCats() {
  const image = {uri: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'};
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={{flex: 2}}>

      </View>
      <View style={styles.informView}>
      <Text style={styles.name}>Matt, 3y</Text>
      <Text style={styles.pronoun}>He/him</Text>
      </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%'

  },
  image: {
    flex: 1,
    width: '100%',
  },
  informView: {
    flex: 1,
    backgroundColor: 'rgba(217,217,217,0.5)',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  name: {
    fontSize: 40,
    fontWeight: '800',
    color: '#ffffff',

  },
  pronoun: {
    fontSize: 30,
    color: '#ffffff',

  }

})