import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Neomorph } from 'react-native-neomorph-shadows';

import Slider from './Slider';

export default class NeomorphClass extends React.Component {
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
        <Neomorph
          darkShadowColor="#FF3333" // <- set this
          lightShadowColor="#3344FF" // <- this
          style={{
            width: 200,
            height: 200,
            shadowOpacity: 0.3, // <- and this or yours opacity
            backgroundColor: `rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})`,
            ...this.state
          }}
        />
        <Text style={styles.title}>Neomorph</Text>
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
    height: 500
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10
  },
})