import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Animated,
  ScrollView
} from 'react-native';

import Shadow from './src/components/Shadow';
import Neomorph from './src/components/Neomorph';
import NestedNeomorph from './src/components/NestedNeomorph';
import NeomorphBlur from './src/components/NeomorphBlur';

const ShadowAnimated = Animated.createAnimatedComponent(Shadow);
const NeomorphAnimated = Animated.createAnimatedComponent(Neomorph);
const NestedNeomorphAnimated = Animated.createAnimatedComponent(NestedNeomorph);
const NeomorphBlurAnimated = Animated.createAnimatedComponent(NeomorphBlur);

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#EDF1F5"/>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <ShadowAnimated />
            <NeomorphAnimated />
            <NeomorphBlurAnimated />
            <NestedNeomorphAnimated />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
  },
});

export default App;
