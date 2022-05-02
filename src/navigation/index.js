import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigator from './HomeNavigator';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';

const AppNavContainer = () => {
    return (
        <NavigationContainer>
            {/* <AuthNavigator /> */}
            <HomeNavigator />
            {/* <DrawerNavigator /> */}
        </NavigationContainer>
        
    );
}

export default AppNavContainer;