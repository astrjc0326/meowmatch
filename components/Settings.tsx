import React, { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, Switch } from "react-native";
// import GenderEntry from "./GenderEntry";
import Slider from "@react-native-community/slider";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import tw from "../lib/tailwind";

export default function Setting() {
  const [isProfileOnClick, profileOnClick] = useState(true);
  const [isSettingOnClick, settingOnClick] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [distance, setDistance] = useState(0);
  const [values, setValues] = useState([0, 100]);
  const [gender, setGender] = useState('Meow&Femeow')
  const multiSliderValuesChange = (values: number[]) => {
    setValues(values);
  };
  const genderOnPress = (gender: string) => {
    setGender(gender)
  }
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const profilebtn = isProfileOnClick
    ? "bg-white text-themecolor"
    : "bg-themecolor text-white";
  const settingbtn = isSettingOnClick
    ? "bg-white text-themecolor"
    : "bg-themecolor text-white";
  return (
    <View style={tw`flex-1 bg-primary`}>
      <View
        style={tw`flex-1 mt-12 mx-4 bg-themecolor rounded-xl flex-row justify-around items-center rounded-full`}
      >
        <TouchableOpacity
          style={tw`px-10 py-2 rounded-full ${profilebtn}`}
          onPress={() => {
            profileOnClick(true);
            settingOnClick(false);
          }}
        >
          <Text style={tw`text-white font-semibold text-lg ${profilebtn}`}>
            Profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`px-10 py-2 rounded-full ${settingbtn}`}
          onPress={() => {
            settingOnClick(true);
            profileOnClick(false);
          }}
        >
          <Text style={tw`text-white font-semibold text-lg ${settingbtn}`}>
            Setting
          </Text>
        </TouchableOpacity>
      </View>
      <View style={tw`h-2`} />
      <ScrollView
        style={tw`flex-12`}
        showsVerticalScrollIndicator={true}
        contentContainerStyle={tw`p-5`}
      >
        <View style={tw`bg-white rounded-lg `}>
          <View style={tw`w-full border-2 border-gray-400`}></View>

          <View style={tw`py-2 flex flex-row justify-between`}>
            <Text style={tw`text-lg font-semibold text-gray-600 mb-2`}>
              Public Profile
            </Text>
            <Switch
              trackColor={{ false: "#ffffff", true: "#c9eded" }}
              thumbColor={isEnabled ? "#ffffff" : "#ffffff"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View style={tw`w-full border-2 border-gray-400`}></View>
        </View>
        <View>
          <Text style={tw`text-base text-gray-500 text-sm`}>
            Turning your Public Profile off hides you from everyone except the
            people you’ve already connected with.
          </Text>
        </View>
        <View style={tw`w-full border-2 border-gray-400`}></View>

        <View style={tw`bg-white rounded-lg`}>
          <View style={tw`flex flex-row justify-between`}>
            <Text style={tw`text-lg font-semibold text-gray-600 mb-2`}>
              Distance
            </Text>
            <Text style={tw`text-lg font-semibold text-gray-600`}>
              {Math.round(distance)} miles
            </Text>
          </View>
          <View style={tw`flex-1 justify-center items-center m-2`}>
            <Slider
              style={tw`w-full`}
              minimumValue={0}
              maximumValue={100}
              value={distance}
              onValueChange={setDistance}
              minimumTrackTintColor="#c9eded" // Change color of the minimum track
              maximumTrackTintColor="#a9a2a2" // Change color of the maximum track
              thumbTintColor="#c9eded" // Change color of the thumb
            />
          </View>
        </View>
        <View style={tw`w-full border-2 border-gray-400`}></View>

        <View style={tw`bg-white mt-3`}>
          <View style={tw`w-full border-2 border-gray-400`}></View>
          <View style={tw`flex flex-row justify-between`}>
            <Text style={tw`text-lg font-semibold text-gray-600`}>Age</Text>
            <Text style={tw`text-lg font-semibold text-gray-600`}>
              From {Math.floor(values[0] / 12)} yr{" "}
              {values[0] - Math.floor(values[0] / 12) * 12} mth to{" "}
              {Math.floor(values[1] / 12)} yr{" "}
              {values[1] - Math.floor(values[1] / 12) * 12} mth
            </Text>
          </View>
          <View style={tw`flex-1 justify-center items-center`}>
            <MultiSlider
              values={values}
              sliderLength={330}
              onValuesChange={multiSliderValuesChange}
              min={0}
              max={240}
              step={1}
              allowOverlap={false}
              snapped
              selectedStyle={{
                backgroundColor: "#c9eded",
                height: 5,
              }}
              unselectedStyle={{
                backgroundColor: "#a9a2a2",
                height: 5,
              }}
              markerStyle={{
                backgroundColor: "#00FF00",
              }}
              customMarker={(e, index) => (
                <View style={[tw`w-7 h-7 rounded-full bg-themecolor`]} />
              )}
            />
          </View>
          <View style={tw`w-full border-2 border-gray-400`}></View>
        </View>
        <View style={tw`mt-2`}>
          <View style={tw`flex flex-row justify-between`}>
          <Text style={tw`text-lg font-semibold text-gray-600`}>Show</Text>
          <Text style={tw`text-lg font-semibold text-gray-600`}>{gender}</Text>
          </View>
          <View>
    <View style={tw`w-full border-2 border-gray-400`}></View>
    <View style={tw`bg-white`}>
      <TouchableOpacity onPress={() => genderOnPress('Meow')} >
        <Text style={tw`text-lg font-semibold text-gray-600`}>Meow</Text>
      </TouchableOpacity>
    </View>
    </View>
          <View style={tw`w-full border-2 border-gray-400`}></View>
          <View style={tw`bg-white`}>
            <TouchableOpacity onPress={() => genderOnPress('Femeow')}>
              <Text style={tw`text-lg font-semibold text-gray-600`}>Femeow</Text>
            </TouchableOpacity>
          </View>
          <View style={tw`w-full border-2 border-gray-400`}></View>
          <View style={tw`bg-white`}>
            <TouchableOpacity onPress={() => genderOnPress('Friends')} >
              <Text style={tw`text-lg font-semibold text-gray-600`}>Friends</Text>
            </TouchableOpacity>
          </View>
          <View style={tw`w-full border-2 border-gray-400`}></View>

        </View>
      </ScrollView>
    </View>
  );
}
