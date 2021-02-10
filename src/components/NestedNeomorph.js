import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Neomorph } from 'react-native-neomorph-shadows';

import Slider from './Slider';

export default class NeomorphClass extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      round1: 200,
      round2: 180,
      round3: 100
    }
    this.onValueChange = this.onValueChange.bind(this);
  }
  
  onValueChange(value, name) {
    this.setState({[name]: value })
  }

  render() {
    return <View style={{margin: 50}}>
      <View style={styles.container}>
        <Neomorph
          style={{
            // shadowRadius: 3,
            borderRadius: this.state.round1,
            backgroundColor: '#DDDDDD',
            width: this.state.round1,
            height: this.state.round1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Neomorph
            inner
            style={{
              shadowRadius: 7,
              borderRadius: this.state.round2,
              backgroundColor: '#F19F9F',
              width: this.state.round2,
              height: this.state.round2,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Neomorph
              style={{
                shadowRadius: 7,
                borderRadius: this.state.round3,
                backgroundColor: '#DDDDDD',
                width: this.state.round3,
                height: this.state.round3,
              }}
            />
          </Neomorph>
        </Neomorph>
        <Text style={styles.title}>Nested Neomorph</Text>
      </View>
      <View>
        <Slider 
          minimumValue={0}
          maximumValue={300}
          step={2}
          onValueChange={this.onValueChange}
          title="round1"
          {...this.state }
          />
        <Slider 
          minimumValue={0}
          maximumValue={300}
          step={2}
          onValueChange={this.onValueChange}
          title="round2"
          {...this.state }
          />
        <Slider 
          minimumValue={0}
          maximumValue={300}
          step={2}
          onValueChange={this.onValueChange}
          title="round3"
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
  }
})