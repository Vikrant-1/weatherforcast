import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Splash } from "./splash";
import { Home } from "./mainS";



const Stack = createStackNavigator();

export function NavigationBox(){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerMode:false}} >
                <Stack.Screen name="splash" component={Splash} />
                <Stack.Screen name="home" component={Home}/>
            </Stack.Navigator>
        </NavigationContainer>
    )

}