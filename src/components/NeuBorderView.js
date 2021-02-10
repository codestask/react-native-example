import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Easing } from "react-native";
import { NeuBorderView, NeuView } from 'react-native-neu-element';

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
        <NeuBorderView
          //Required
          width={200}
          height={100}
          color={rgbToHex(red, green, blue)}

          //Optional
          //Specify the width of the border
          //Default: 10
          borderWidth={10}

          //Optional
          //Specify the radius of the border
          //Default: 0
          borderRadius={16}
          >
        </NeuBorderView>
        </View>

      </NeuView>
    </View>
    <View>
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