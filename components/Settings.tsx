import React from 'react';
import styles from '../assets/styles';
import {ScrollView, View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function Setting() {
  return (
    <View style={stylessheet.container}>
      <View style={stylessheet.headingbtn}>
      <TouchableOpacity style={stylessheet.profilebtn}>
        <Text style={stylessheet.headingtxt}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={stylessheet.profilebtn}>
      <Text style={stylessheet.headingtxt}>Setting</Text>
      </TouchableOpacity>
      </View>
      <View style={stylessheet.flexxs}>
      </View>
      <View style={{height: '85%'}}>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={true}contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{...stylessheet.flex1, ...styles.btntxt, ...stylessheet.border}}>
        <Text style={stylessheet.text}>Pubilc Profile</Text>
      </View>
      <View style={{...stylessheet.flex1}}>
        <Text style={stylessheet.instruction}>Turning your Public Profile off hides you from everyone except the people you’ve already connected with. </Text>
      </View>
      <View style={{...stylessheet.flex2, ...stylessheet.border}}>
        <View>
        <Text style={stylessheet.text}>Distance</Text>
        <Text>10miles</Text>
        </View>
      </View>
      <View style={stylessheet.flexxs}></View>
      <View style={{...stylessheet.flex2, ...stylessheet.border}}>
        <Text style={stylessheet.text}>Age</Text>
        <Text>8m-3y</Text>
      </View>
      <View style={{flex: 10}}>
        <Text style={stylessheet.text}>Show</Text>
        <View></View>
      </View>
      <View style={stylessheet.flex1}>
        <Text style={stylessheet.text}>Push notifications</Text>
      </View>
      <View style={stylessheet.flex1}>
        <Text style={stylessheet.text}>App Sounds/Vibration</Text>
      </View>
      <View style={stylessheet.flex1}>
        <Text style={stylessheet.text}>Feedback</Text>
      </View>
      <View style={stylessheet.flex1}>
        <Text style={stylessheet.text}>Terms of Service</Text>
      </View>
      <View style={stylessheet.flex1}>
        <Text style={stylessheet.text}>Privacy Policy</Text>
      </View>
      <View style={stylessheet.flex1}>
        <Text style={stylessheet.text}> Terms of Service</Text>
      </View>
      <View style={stylessheet.flex1}>
      </View>
      </ScrollView>
      </View>
    </View>
  )
}

const stylessheet = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#e9f5f5',

  },
  headingbtn: {
    flex: 1,
    marginTop: 30,
    marginHorizontal: 20,
    backgroundColor: '#c9eded',
    flexDirection: 'row',
    justifyContent:"space-around",
    alignItems: "center",
    borderRadius: 30,
    paddingVertical: 10
  },
  profilebtn: {
    flex: 1,
    height:'80%',
    verticalAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  headingtxt: {
    flex: 1,
    color: 'white',
    fontWeight: '600',
    fontSize: 20,
    height: '100%',
    alignItems: "center",
    justifyContent: "center",
  },
  flexxs: {
    flex: 0.5
  },
  flex1: {
    flex: 1
  },
  flex2: {
    flex: 2
  },
  flex3: {
    flex: 3
  },
  border: {
    borderTopColor: '#adabab',
    borderBottomColor: '#adabab',
    borderRightColor: '#sffffff',
    borderLeftColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 3,
    borderRadius: 0,
    alignContent: 'center',
    backgroundColor: '#ffffff'
  },
  instruction: {
    flex: 1,
    flexWrap: 'wrap'
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    alignItems: 'center'
  }
})