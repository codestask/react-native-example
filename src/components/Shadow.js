import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Shadow } from 'react-native-neomorph-shadows';

import Slider from './Slider';

export default class ShadowClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      borderRadius: 50,
      shadowRadius: 15,
      red: 236,
      green: 240,
      blue: 243
    };
    this.onValueChange = this.onValueChange.bind(this);
  }

  onValueChange(value, name) {
    this.setState({[name]: value })
  }

  render() {
    return <View style={{margin: 50}}>
      <View style={styles.container}>
        <Shadow
          inner // <- enable inner shadow
          useArt // <- set this prop to use non-native shadow on ios
          style={{
            width: 200,
            height: 200,
            shadowOffset: {width: 10, height: 10},
            shadowOpacity: 1,
            shadowColor: "gray",
            backgroundColor: `rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})`,
            ...this.state
          }}
        />
        <Text style={styles.title}>Shadow</Text>
      </View>
      <View>
        <Slider 
          minimumValue={0}
          maximumValue={255}
          step={1}
          onValueChange={this.onValueChange}
          title="red"
          {...this.state }
          />
        <Slider 
          minimumValue={0}
          maximumValue={255}
          step={1}
          onValueChange={this.onValueChange}
          title="green"
          {...this.state }
          />
        <Slider 
          minimumValue={0}
          maximumValue={255}
          step={1}
          onValueChange={this.onValueChange}
          title="blue"
          {...this.state }
          />
        <Slider 
          minimumValue={0}
          maximumValue={100}
          step={1}
          onValueChange={this.onValueChange}
          title="borderRadius"
          {...this.state }
          />
        <Slider 
          minimumValue={0}
          maximumValue={50}
          step={1}
          onValueChange={this.onValueChange}
          title="shadowRadius"
          {...this.state }
          />
      </View>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 500,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10
  },
})