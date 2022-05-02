import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Contacts = () => {
    return (
        <View>
            <Text>Contacts Page</Text>
        </View>
    )
}

const ContactDetails = () => {
    return (
        <View>
            <Text>Contact Details Page</Text>
        </View>
    )
}

const CreateContact = () => {
    return (
        <View>
            <Text>Create Contact Page</Text>
        </View>
    )
}

const Settings = () => {
    return (
        <View>
            <Text>Settings Page</Text>
        </View>
    )
}

const AppNavContainer = () => {
    const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator initialRouteName='Contacts'>
        <HomeStack.Screen name="Contacts" component={Contacts} />
        <HomeStack.Screen name="Contact Details" component={ContactDetails} /> 
        <HomeStack.Screen name="Create Contact" component={CreateContact} />  
        <HomeStack.Screen name="Settings" component={Settings} />  
    </HomeStack.Navigator>
  )
}

export default AppNavContainer;