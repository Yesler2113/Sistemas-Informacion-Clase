import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {Text, View} from 'react-native';
import { HomeScreen } from './presentation/screens/home/HomeScreen';
import { StackNavigator } from './presentation/routes/StackNavigator';

export const App = () => {
  return (
    <NavigationContainer>
        <StackNavigator/>
    </NavigationContainer>
  );
};
