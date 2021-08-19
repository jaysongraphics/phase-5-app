import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Stylesheet, Text, View, ImageBackground } from 'react-native';
import style from './components/style'
import Quotes from './components/quotes'

function App() {

  return (   

<View style={style.container}> 
 <Text style={style.logo}>Selflax</Text>
     <View style={style.homePage}>  
      <Text style={style.text}>Get motivated!</Text> 
    {/* <Tab.Navigator>

      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
  
    </Tab.Navigator> */}
    
        <Quotes />   
       <StatusBar style="auto" />
      </View>
  </View> 
  )
}
export default App;