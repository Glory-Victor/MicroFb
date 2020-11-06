import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Profile from './Profile';
import Feed from './Feed';
import Post from './Post';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            {/* Onclick of login navigate to feed page */}
            <Stack.Screen name="Login" component={Login} />
            {/* Onclick of profile icon in feed page will display profile page */}
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Feed" component={Feed} />
            {/* Onclick of any post will navigate to Post page */}
            <Stack.Screen name="Post" component={Post} />
          </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;