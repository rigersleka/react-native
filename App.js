import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { Provider } from 'react-redux';
import { StyleSheet } from 'react-native';

/* Navigation Imports */
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import DetailsScreen from './components/DetailsScreen';
import Home from './components/Home';
import store from './store/config/store.config';
import ModalScreen from './components/ModalScreen';

const fetchFonts = () => {
  return Font.loadAsyn({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

const Stack = createStackNavigator();

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer style={styles.container}>
        <Stack.Navigator
          initialRouteName='Home'
          screenOptions={{
            headerMode: 'screen',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'tomato' },
          }}
        >
          <Stack.Screen
            name='Home'
            component={Home}
            options={{
              title: 'Awesome app',
            }}
          />
          <Stack.Screen
            name='DetailsScreen'
            component={DetailsScreen}
            options={{
              title: 'Details',
              cardStyleInterpolator:
                CardStyleInterpolators.forFadeFromBottomAndroid,
            }}
          />
          <Stack.Screen 
            name="Modal"
            component={ModalScreen}
            options={{ presentation: 'transparentModal' }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
