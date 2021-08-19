import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Stylesheet, Button, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import style from './components/style'
import Quotes from './components/quotes'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {useState, useEffect} from 'react'
import logo from './images/BRAINONLYBLACK.png'
import profile from './images/profile.jpg'
import profilee from './images/aaaa.png'
import itore from './images/store.jpg'

function App() {
// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();


function HomeScreen({ navigation }) {
  return (
    <View 
    style={{ flex: 1, alignItems: 'center', justifyContent: '' }}
    >
    <Text style={style.homelogo}>Welcome!</Text>
      <ImageBackground source={logo} style={style.logooig}/>
    </View>
  );
}

function DetailQuotes({ navigation }) {
  return (
  <View 
  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
  >
    <Text style={style.homelogoa}>Quotes</Text>
        <View style={style.homePage}>  
        <Text style={style.text}>Get motivated!</Text> 
          <Quotes /> 
       </View>
    </View>
  );
}

function Profile({ navigation }) {
  return (
    <View 
    style={{ flex: 1, alignItems: 'center', justifyContent: '' }}
    >
       <Text style={style.profilepri}>Profile</Text>
        <ImageBackground
        source={profilee} style={style.lopri}/>
      {/* <Button
        title="Get motivated"
        onPress={() => navigation.navigate('Quotes')}/> */}
        </View>
  );
}

function About({ navigation }) {
  return (
    <View 
    style={{ flex: 1, alignItems: 'center', justifyContent: '' }}
    >
  <Text style={style.homelogo}>About</Text>
    <Text style={style.para}> Breaking Taboo
      Our intention is to educate, share, and encourage open conversations about this topic. We believe that in order to solve a problem, we must focus on the root cause. In order to save lives, we must kill the silence. In order to kill the silence we must break the taboo.</Text> 

   <View>
    <Text style={style.parasecond}>Our Services</Text>
    </View>
     <View> 
    <Text style={style.parathrid}>✔️Book appointments</Text>
   <Text style={style.parathrid}>✔️Book an appointment with your favorite therapists!</Text>
   <Text style={style.parathrid}>✔️Review therapists</Text>
    <Text style={style.parathrid}>✔️Review your therapists, tell the community how good they are!</Text>
      <Text style={style.parathrid}>✔️Share your feelings</Text>
      <Text style={style.parathrid}>✔️Do not hide your feelings, share them.</Text>
        <Text style={style.parathrid}>✔️Chat with friends</Text>
       <Text style={style.parathrid}>✔️Talk to your friends online.</Text>
       </View> 
  
    </View>
  );
}


function Store({ navigation }) {
  return (
    <View 
    style={{ flex: 1, alignItems: 'center', justifyContent: '' }}
    >
       <Text style={style.profilepri}>Store</Text>
        <ImageBackground
        source={itore} style={style.lopri}/>
      {/* <Button
        title="Get motivated"
        onPress={() => navigation.navigate('Quotes')}/> */}
        </View>
  );
}

    return (
      <NavigationContainer>
      <Tab.Navigator
          initialRouteName="Home"
          activeColor="#e91e63"
          barStyle={{ backgroundColor: 'black' }}>
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Quotes"
              component={DetailQuotes}
              options={{
                tabBarLabel: 'Quotes',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="library" color={color} size={26} />
                ),
              }}
            />

         <Tab.Screen
              name="Profile"
              component={Profile}
              options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="account" color={color} size={26} />
                ),
              }}
            /> 

        <Tab.Screen
              name="About"
              component={About}
              options={{
                tabBarLabel: 'About',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="details" color={color} size={26} />
                ),
              }}
          /> 

          <Tab.Screen
              name="Store"
              component={Store}
              options={{
                tabBarLabel: 'Store',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="settings" color={color} size={26} />
                ),
              }}
          /> 

         </Tab.Navigator>
          </NavigationContainer>
       );
      } 
      
    //   <NavigationContainer>
    //   <Tab.Navigator>
    //   <Tab.Screen name="Home" component={HomeScreen} />
    //   <Tab.Screen name="Quotes" component={DetailQuotes} />
    //   </Tab.Navigator>
    //   </NavigationContainer>
    // )}

        // <NavigationContainer>
        //   <Stack.Navigator initialRouteName="Home">

        //       <Stack.Screen
        //         name="Home"
        //         component={HomeScreen}
        //         options={{ title: 'Home' }}
        //       />

        //       <Stack.Screen
        //         name="Quotes"
        //         component={DetailQuotes}
        //         options={{ title: 'Quotes' }}
        //       />
        //   </Stack.Navigator>
        // </NavigationContainer>
//     );
// }






  export default App;








//   return (   

// {/* <View style={style.container}> 
//  <Text style={style.logo}>Selflax</Text>
//      <View style={style.homePage}>  
//       <Text style={style.text}>Get motivated!</Text> 
  
//         <Quotes />   
//        <StatusBar style="auto" />
//       </View>
//   </View>  */}





//   )
// }


// export default App;



{/* <NavigationContainer>
<Tab.Navigator
      initialRouteName="Feed"
      activeColor="#e91e63"
      barStyle={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Feed"
        component={DetailQuotes}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={DetailQuotes}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
   <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      /> 
   </Tab.Navigator>
    </NavigationContainer>
 );
}  */}
