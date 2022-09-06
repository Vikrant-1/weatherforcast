import React, { useEffect, useState } from "react";
import {View , Text, ScrollView, Image, StatusBar, TextInput , TouchableOpacity, ActivityIndicator, Alert, ImageBackground}from 'react-native';
import { WeatherDetailCard } from "../Compo/weatherDetail";
import GlobalStyles from "../Compo/GlobalStyles";
import {useNetInfo} from '@react-native-community/netinfo';



export function Home(){
    const [inputCityName , setinputCityName] = useState('delhi');  // for search input
    const [cel, setCel] = useState(true);    //temperture cel to fah or vise versa
    const [city , SetCity] = useState(null);  // all data from api
    const [cityTempCel , setCityTempCel] = useState('');  // store temp
    const [onpress , setonpress] = useState(true); // serach button

    useEffect(
      () => {
          const fetchdata = async() => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${inputCityName}&appid=aeedc08f6ce8d717c8ed4b9b8f237863&units=metric`;
            const response = await fetch(url);
            const responseData = await response.json();
            if(response.status === 200){
              SetCity(responseData);
              setCityTempCel(parseInt(responseData.main.temp));
            }else{
              return(
                Alert.alert('City not found !!! ')
              )
            }
          }
          fetchdata()
        },
      [onpress]
    )

    useEffect(
      ()=>{
        const fetchForcastData = async()=>{
          const url = `http://api.openweathermap.org/data/2.5/forecast?q=${inputCityName}&appid=c5fe4e42c6572c142a7281668083d8da&units=metric&cnt=1`;
          const response = await fetch(url);
          const responseData = await response.json();
          console.log(responseData);
        }
        fetchForcastData();
      },[onpress]
    )

    const onTextChangeHandler = (text , valueFor) =>{
      if(valueFor === 'inputCityName')setinputCityName(text);
    }


    return(
     
      <View style = {GlobalStyles.BacgImages} >
        <StatusBar
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        />
        <ScrollView>
              <View style={GlobalStyles.InputBox}>
                <TextInput 
                maxLength={30}
                value={inputCityName}
                placeholder={'Enter the city name'}
                onChangeText={text=>onTextChangeHandler(text,'inputCityName')}
                style={[GlobalStyles.Input]}
                />
              <TouchableOpacity onPress={ () => setonpress(!onpress)}>
                <Image style={GlobalStyles.weatherIcon} source={require('../Assets/searchIcon.png')} />
              </TouchableOpacity> 
              </View>
          {
            !city 
            ?
            <View style={[GlobalStyles.Splashbody,GlobalStyles.centerAlignment]}>
              <ActivityIndicator/>
            </View>
            :
          
        <View>           
          <View style={GlobalStyles.firstHalf}>
              <View style={[GlobalStyles.tempData,GlobalStyles.centerAlignment]}>
                <TouchableOpacity style={[GlobalStyles.TempChanger , GlobalStyles.centerAlignment]} onPressIn={()=>setCel(!cel)}>
                  <Text style={GlobalStyles.heading}>{cel ? '°C' :'°F'}</Text>
                </TouchableOpacity>
                <Text style={GlobalStyles.ImgTemp}>{city.name}
                </Text>
                <Text style={[GlobalStyles.heading,GlobalStyles.whiteColor]}>
                  {cel ? cityTempCel +' °C' : parseInt((cityTempCel*1.8)+32)+' °F'}
                </Text>
                <Image style={GlobalStyles.weatherIcon}
                 source={{uri:`http://openweathermap.org/img/w/${city.weather[0].icon}.png`}}/>
                 <Text style={[GlobalStyles.subHeading , GlobalStyles.whiteColor]}>
                  {city.weather[0].description}
                 </Text>
              </View>
          </View>
          <View style={GlobalStyles.secondHalf}>
          <Text style={GlobalStyles.heading}>5 days Weather Fore Cast</Text>



          </View>


         <View>
            <View style = {{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
              <Text style={GlobalStyles.heading}>Weather Detail</Text>
            </View>
            <View style={{flexDirection:'row'}} >
              <WeatherDetailCard item={{title:'Temperture' ,subTitle:cel ? cityTempCel +' °C' : parseInt((cityTempCel*1.8)+32)+' °F',icon:'https://cdn1.iconfinder.com/data/icons/leisure-and-tourism-9/76/vector_905_46-1024.png'}} />
              <WeatherDetailCard item={{title:'Humidity' ,subTitle:city.main.humidity +'%', icon:'https://tse2.mm.bing.net/th?id=OIP.eAp7JVhz_hn5dZadilUh0gHaHa&pid=Api&P=0'}} />
            </View>
            <View style={{flexDirection:'row'}} >
              <WeatherDetailCard item={{title:'Visibilty' ,subTitle:city.visibility/1000 + ' km',icon:'https://tse1.mm.bing.net/th?id=OIP.kqr5f9-khb3OKUBZ3a6HhgHaD4&pid=Api&P=0'}} />
              <WeatherDetailCard item={{title:'Wind Speed' ,subTitle:city.wind.speed + ' m/s' ,icon:'https://pic.onlinewebfonts.com/svg/img_315328.png'}} />
            </View>
            <View style={{flexDirection:'row'}} >
              <WeatherDetailCard item={{title:'Cloudiness' ,subTitle:city.clouds.all +'%',icon:`http://openweathermap.org/img/w/${city.weather[0].icon}.png`}} />
              <WeatherDetailCard item={{title:'Pressure' ,subTitle:city.main.pressure + ' hPa',icon:'https://cdn.imgbin.com/20/24/21/imgbin-atmospheric-pressure-computer-icons-atmosphere-barometer-barometer-HsYUqV8GFT3QPcUDxP8vVs8FM.jpg'}} />
            </View>
         </View>
        </View>}
      </ScrollView>
    </View>
    )
};


