import { StackNavigator } from "react-navigation";
import MainScreenNavigator from './MainScreenNavigator';
import ProblemScreen from '../problems/ProblemScreen';
import {Platform, StatusBar} from 'react-native';

const AppStackNavigator = StackNavigator({
  Home: { screen: MainScreenNavigator }
}, {
  headerMode: "none",
  cardStyle: {
    paddingTop: StatusBar.currentHeight //Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  }
});

export default AppStackNavigator;