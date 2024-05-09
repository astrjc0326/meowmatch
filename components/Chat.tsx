import React from 'react';
import Profileicon from '../assets/Profileicon';
import Chaticon from '../assets/ChatSVG';
import {View, Text, StyleSheet} from 'react-native';

export default function Chat () {

  return (
    <View style={styles.container}>
      <View style={styles.chatContainer}>
        <Profileicon style={{flex: 1}}/>
        <View style={styles.iconcontainer}>
        <Chaticon sytle={styles.chaticon}/>
        </View>
        <View style={styles.chatbox}>
        <Text>Hello. Nice to meet you. I’m really bored cause my slave doesn’t play with me.</Text>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%'

  },
  chatContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 10
  },
  image: {
    flex: 1,
    width: '100%',
  },
  chatbox: {
    flex: 5,
    backgroundColor: '#c9eded',
    height: 'auto',
    width: '100%',
    borderRadius: 15,
    justifyContent: 'center', //Centered vertically
    alignItems: 'flex-start', //Centered horizontally
    paddingLeft: 10,
    fontSize: 30
},
  iconcontainer: {
    marginTop: 20,
    paddingLeft: 10,
  },

  chaticon: {
    flex: 0.5,
  }

})