import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import configureStore from './src/store/configureStore';
import {Provider} from 'react-redux';
import AppStackNavigator from './src/components/navigation/AppStackNavigator';

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
		  <View style={styles.container}>
				<AppStackNavigator />
		  </View>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
