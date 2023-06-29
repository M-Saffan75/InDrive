import React from 'react'
import Faq from './Screens/Faq';
import Home from './Screens/Home';
import City from './Screens/City';
import Safety from './Screens/Safety';
import Profile from './Screens/Profile';
import Support from './Screens/Support';
import Setting from './Screens/Setting';
import Edit_Profile from './Screens/Edit_Profile';
import City_to_City from './Screens/City_to_City';
import Side_Navigator from './Screens/Side_Navigator';
import Request_History from './Screens/Request_History';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

const App = () => {

  const Stack = createStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ ...TransitionPresets.FadeFromBottomAndroid, headerShown: false }} initialRouteName='Home'>
          <Stack.Screen name="Faq" component={Faq} />
          <Stack.Screen name="City" component={City} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Safety" component={Safety} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Support" component={Support} />
          <Stack.Screen name="Setting" component={Setting} />
          <Stack.Screen name="Edit_Profile" component={Edit_Profile} />
          <Stack.Screen name="City_to_City" component={City_to_City} />
          <Stack.Screen name="Side_Navigator" component={Side_Navigator}  options={{ ...TransitionPresets.SlideFromRightIOS }}/>
          <Stack.Screen name="Request_History" component={Request_History} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App