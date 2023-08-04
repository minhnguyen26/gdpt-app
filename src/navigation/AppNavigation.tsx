import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import * as React from 'react';

// ref
import {screenTracking, setNavigator} from '../utils/navigation';
import Metrics from '../themes/Metrics';
import HomeScreen from '../containers/home/HomeScreen';
import {View} from 'react-native';
import SemaphoreScreen from '../containers/Semaphore/SemaphoreScreen';

const screenOption = {
  headerShown: false,
};

const Stack = createStackNavigator();
export default function AppNavigation() {
  const navigationRef = useNavigationContainerRef();

  // const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer
      ref={setNavigator(navigationRef)}
      onStateChange={screenTracking}>
      {/* <Drawer.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          swipeEdgeWidth: 0,
          drawerPosition: 'left',
          headerShown: false,
          drawerStyle: {
            width: Metrics.screenWidth,
          },
        }}
        drawerContent={props => <View />}> */}
      {/* <Drawer.Screen name="Home" component={AppStack} /> */}
      {/* </Drawer.Navigator> */}

      <Stack.Navigator
        initialRouteName={'HomeScreen'}
        screenOptions={screenOption}>
        {/* <Stack.Screen name={'SplashScreen'} component={SplashScreen} /> */}
        <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
        <Stack.Screen name={'SemaphoreScreen'} component={SemaphoreScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'SplashScreen'}
      screenOptions={screenOption}>
      {/* <Stack.Screen name={'SplashScreen'} component={SplashScreen} /> */}
      <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
    </Stack.Navigator>
  );
};
