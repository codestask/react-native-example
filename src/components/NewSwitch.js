import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ScrollView
} from 'react-native';
import {
  NeuView,
  NeuBorderView,
  NeuButton,
  NeuInput,
  NeuSpinner,
  NeuSwitch
} from 'react-native-neu-element';

import Slider from './Slider';

const { width } = Dimensions.get('screen');


const initState = {
  red: 238,
  green: 242,
  blue: 249
};

export default function NeuElement() {
  let [isPressed, setIsPressed] = React.useState(true);
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
  return (
    <ScrollView>
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
            <NeuSwitch
              isPressed={isPressed}
              setIsPressed={setIsPressed}
              color={rgbToHex(red, green, blue)}
              containerHeight={40}
              containerWidth={80}
              buttonHeight={40}
              buttonWidth={45}
            />
          </View>

          <NeuSwitch
            isPressed={isPressed}
            setIsPressed={setIsPressed}
            color={rgbToHex(red, green, blue)}
            containerHeight={40}
            containerWidth={80}
            buttonHeight={40}
            buttonWidth={45}

            customGradient={['#fc6859', '#e945d0']}
          />
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
  )
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