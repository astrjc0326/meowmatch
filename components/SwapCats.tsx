import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, PanResponder, Animated } from "react-native";
import tw from "../lib/tailwind";

export default function SwapCats() {
  const pan = useRef(new Animated.ValueXY()).current;
  const [photouri, setNextPhoto] = useState(
    "https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  );
  const [nextPhoto, cacheNextPhoto] = useState(
    "https://images.unsplash.com/photo-1583083527882-4bee9aba2eea?q=80&w=1977&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  );
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gesture) => {
        pan.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: (_, gesture) => {
        // Handle release of touch
        if (gesture.dx > 50 || gesture.dx < -50) {
          setNextPhoto(nextPhoto);
          cacheNextPhoto(
            "https://images.unsplash.com/photo-1574231164645-d6f0e8553590?q=80&w=2004&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          );
        }
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
      },
    }),
  ).current;

  useEffect(() => {}, [nextPhoto]);

  return (
    <View style={tw`w-full h-full flex-1`}>
      <View style={tw`flex-10`}>
        <Animated.Image
          source={{ uri: photouri }}
          style={[
            tw`w-full h-full`, // Set width and height
            { transform: [{ translateX: pan.x }] },
          ]}
          {...panResponder.panHandlers}
        />
      </View>
      <View style={tw`flex-3`}>
        <Text style={tw`font-bold text-gray-500 text-xl text-center`}>
          Meowow
        </Text>
      </View>
    </View>
  );
}
