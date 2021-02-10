import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

export default (props) => {
  return (
    <View style={ styles.container }>
      <Text style={styles.title}>{ props.title }: {props[props.title]}</Text>
      <Slider 
        {...props}
        value={props[props.title]}
        onValueChange={(value) => props.onValueChange(value, props.title)}
        style={{flex: 1}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 5
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 10,
    letterSpacing: 1.2,
    textTransform: 'capitalize'
  },
});