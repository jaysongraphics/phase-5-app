import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Stylesheet,Button, Text, View, ImageBackground } from 'react-native';
import style from './components/style'
import Quotes from './components/quotes'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function App() {

const Stack = createNativeStackNavigator();
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: '' }}>
      <Text>Home Screen</Text>
      <Button
        title="Get motivated"
        onPress={() => navigation.navigate('Quotes')}/>
    </View>
  );
}


function DetailsScreen({ navigation }) {
  return (
  <View 
  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
  >
    <Text style={style.logo}>Selflax</Text>
        <View style={style.homePage}>  
        <Text style={style.text}>Get motivated!</Text> 
          <Quotes />
      <Button 
      // style={style.buttons} 
      title="Go to Home" 
      onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
    </View>
  );
}

    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">

              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'Home' }}
              />

              <Stack.Screen
                name="Quotes"
                component={DetailsScreen}
                options={{ title: 'Quotes' }}
              />
          </Stack.Navigator>
        </NavigationContainer>
    );
}






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