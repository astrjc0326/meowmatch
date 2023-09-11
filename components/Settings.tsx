import React from 'react';
import styles from '../assets/styles';
import {View, Text, TouchableOpacity} from 'react-native';

export default function Setting() {
  return (
    <View>
      <TouchableOpacity>
        <Text style={styles.fbbtntext}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text>Setting</Text>
      </TouchableOpacity>
    </View>
  )
}

