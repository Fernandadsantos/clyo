/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Dimensions, StyleSheet, View } from 'react-native';
import Register from './src/views/register/register';
import Trail from './src/views/register/trail';
import Home from './src/views/home/home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from '@react-native-vector-icons/fontawesome6';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import SearchView from './src/views/seachView/searchView';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const screenWidth = Dimensions.get('window').width;
const tabWidth = screenWidth / 5;

function Tabs() {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabBar,
        }} >
        <Tab.Screen
          name="Inicio"
          component={Home}
          options={{
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon(props) {
              return (
                <View style={styles.icon}>
                  <Icon
                    name="house"
                    size={23} color={props.focused ? "#373638" : "#fff"} iconStyle='solid'
                  />
                </View>
              );
            },
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="Buscar"
          component={Register}
          options={{
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon(props) {
              return (
                <View style={styles.icon}>
                  <Icon
                    name="signal"
                    size={23} color={props.focused ? "#373638" : "#fff"} iconStyle='solid'
                  />
                </View>
              );
            },
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchView}
          options={{
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon(props) {
              return (
                <View style={styles.icon}>
                  <Icon
                    name="magnifying-glass"
                    size={23} color={props.focused ? "#373638" : "#fff"} iconStyle='solid'
                  />
                </View>
              );
            },
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="Estante"
          component={Home}
          options={{
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon(props) {
              return (
                <View style={styles.icon}>
                  <Icon
                    name="user"
                    size={23} color={props.focused ? "#373638" : "#fff"} iconStyle='solid'
                  />
                </View>
              );
            },
            tabBarShowLabel: false,
          }}
        />
      </Tab.Navigator>
    </View>
  )
}


const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#875AEC',
    height: 78,
  },
  icon: {
    height: 63,
    top: 12,
    width: tabWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function App() {

  return (
    <PaperProvider>
      <NavigationContainer
        theme={{
          ...DefaultTheme,
          colors: { ...DefaultTheme.colors, },
        }}>

        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Home" component={Tabs} />
          <Stack.Screen name="Trail" component={Trail} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}


export default App;
