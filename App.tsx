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
import Perfil from './src/views/perfil/perfil';
import Login from './src/views/login/login';
import Consulations from './src/views/consultations/consultations';
import SplashScreen from 'react-native-splash-screen';
import { useEffect } from 'react';
import Statistics from './src/views/statistics/statistics';
import Tratamentos from './src/views/tratamentos/tratamentos';

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
          name="Statistic"
          component={Statistics}
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
          name="Perfil"
          component={Perfil}
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

  useEffect(() => {
    SplashScreen.hide();
  }, []);

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
            statusBarStyle: "dark",
          }}>
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Home" component={Tabs} />
          <Stack.Screen name="Trail" component={Trail} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Consultas" component={Consulations} />
          <Stack.Screen name="Tratamentos" component={Tratamentos} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}


export default App;
