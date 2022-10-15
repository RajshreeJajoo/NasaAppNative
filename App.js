import { Button, StyleSheet, Text, TextInput, View, SafeAreaView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import NasaDetails from './NasaDetails';
import NasaLogin from './NasaLogin';
import Error from './Error';

  const AppNavigator = createStackNavigator({
    Nasa: {
      screen: NasaLogin
    },
    Details: {
      screen: NasaDetails
    },
    ErrorPage: {
      screen: Error
    }
  },{
          initialRouteName: "Nasa"
  });
 

const AppContainer = createAppContainer(AppNavigator);  
export default function App() {
  return (
    <AppContainer/>
  )
}


