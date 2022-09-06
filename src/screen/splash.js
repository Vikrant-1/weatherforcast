import React from "react";
import {View , Image , Platform, Alert}from 'react-native';
import GlobalStyles from "../Compo/GlobalStyles";

export function Splash({navigation}){

    setTimeout(()=>{
        navigation.navigate('home');
    },2000)


    return(
        <View style={[GlobalStyles.Splashbody,GlobalStyles.centerAlignment]}>
            <Image style={{width:130, height:130}}  source={ require('../Assets/weatherAppIcon.png')}/>
        </View>
    )
}

