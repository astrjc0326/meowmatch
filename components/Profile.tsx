import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Cat from "../assets/Cat";
import styles from "../assets/styles";
import tw from "twrnc";

export default function Profile() {
  return (
    <View
      style={tw`flex-1 items-center justify-center bg-theme.colors.primary`}
    >
      <Cat style={tw`mt-5 `} />
      <View style={tw`flex-1 flex-row content-around justify-around`}>
        <Text style={tw`text-xl font-bold`}>Ddangkong</Text>
        <Text style={tw`text-xl ml-3`}>3y3m</Text>
      </View>
    </View>
  );
}
