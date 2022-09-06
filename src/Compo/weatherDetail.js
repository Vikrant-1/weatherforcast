import React from "react";
import { Image, Text, View } from "react-native";
import GlobalStyles from "./GlobalStyles";


export function WeatherDetailCard({item}){
    const {title,subTitle,icon} = item;
    return(
        <View style={[GlobalStyles.box, GlobalStyles.centerAlignment]}>
            <Image style={GlobalStyles.weatherIcon}  source={{uri:icon}}/>
            <Text style={GlobalStyles.subHeading}>
                {subTitle}
            </Text>
            <Text style={GlobalStyles.subHeadingTxt}>
                {title}
            </Text>
            
        </View>

    )
}


