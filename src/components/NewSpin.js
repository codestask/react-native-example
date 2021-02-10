import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Easing } from "react-native";
import { NeuSpinner, NeuView } from 'react-native-neu-element';

import Slider from './Slider';

const { width } = Dimensions.get('screen');


const initState = {
  red: 238,
  green: 242,
  blue: 249
};

export default function () {
  let [state, setState] = React.useState(initState);
  let { red, green, blue } = state;
  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  const onValueChange = (value, name) => {
    setState(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  return <ScrollView>
    <View style={styles.container}>
      <NeuView
        color={rgbToHex(red, green, blue)}
        height={200}
        width={width * 9 / 10}
        borderRadius={16}
        style={styles.neuView}
        containerStyle={{ flexDirection: 'row' }}
      >
        <View style={{ marginRight: 30 }}>
          <NeuSpinner
            //Required
            color={rgbToHex(red, green, blue)}
            size={50}
            indicatorColor='#aaffc3' // Mint

            //Optional
            //Determine how fast do a spinner spin one cycle
            //Default: 1000
            duration={1000}

            //Optional
            //Easing Type
            //Accept Easing from react-native-reanimated
            //Default: Easing.linear
            easingType={Easing.linear}
          />
        </View>

      </NeuView>
    </View>
    <View>
      <Slider
        {...state}
        minimumValue={0}
        maximumValue={255}
        step={1}
        onValueChange={onValueChange}
        title="red"
      />
      <Slider
        {...state}
        minimumValue={0}
        maximumValue={255}
        step={1}
        onValueChange={onValueChange}
        title="green"
      />
      <Slider
        {...state}
        minimumValue={0}
        maximumValue={255}
        step={1}
        onValueChange={onValueChange}
        title="blue"
      />
    </View>
  </ScrollView>
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  neuView: {
    margin: 30,
    flexDirection: 'row'
  },

})