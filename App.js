import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  ScrollView
} from 'react-native';

import NeuButton from './src/components/NeuButton';
import NeuSwitch from './src/components/NewSwitch';
import NeuSpin from './src/components/NewSpin';
import NeuBorderView from './src/components/NeuBorderView';



const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <NeuButton />
          <NeuSwitch />
          <NeuSpin />
          <NeuBorderView />
          
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
