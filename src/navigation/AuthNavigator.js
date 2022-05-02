import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


const LoginScreen = () => {
    return (
        <View>
            <Text>This is the Login Screen</Text>
        </View>
    );
};

const RegisterScreen = () => {
    return (
        <View>
            <Text>This is the Register Screen</Text>
        </View>
    );
};


const AuthNavigator = () => {
    const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator initialRouteName='Login'>
        <AuthStack.Screen name="Login" component={LoginScreen} />
        <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
  )
}

export default AuthNavigator;