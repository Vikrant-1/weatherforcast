import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default StyleSheet.create({
    Splashbody:{
      width:width,
      height:height,
      backgroundColor:'#fff'
    },

    centerAlignment:{
      justifyContent:'center',
      alignItems:'center',
    },
  
    BacgImages:{
      width:width,
      height:height,
      backgroundColor:'#90A4AE'

    },

    heading:{
        fontSize:20,
        fontWeight:'500',
        color:'#000'
    
      },
      subHeading:{
        color:"#000",
        fontSize:18,
        fontWeight:'400',
      },
      subHeadingTxt:{
        fontSize:14,
        fontWeight:'400',
        
      },
      box:{
        width:width/2-20,
        height:130,
        backgroundColor:'#D5D4D4',
        borderRadius:8,
        elevation:5,
        margin:10

      },
      weatherIcon:{
        width:30,
        height:30,

      },
      firstHalf:{
        flexDirection:'row',
        width:width,
        height:height/2,
        paddingVertical:30,
        justifyContent:'center',
        
      },
      thirdHalf:{
        width:width,
      },
      weatherImg:{
        width:width,
        height:height/2,
      },

      ImgTemp:{
        fontSize:32,
        fontWeight:'400',
        color:'#000',
      },
      InputBox:{
        marginTop:20,
        alignSelf:'center',
        width:width-50,
        height:45,
        borderRadius:24,
        backgroundColor:'#fff',
        paddingHorizontal:15,
        flexDirection:'row',
        alignItems:'center',
        elevation:10,
      },
      Input:{
        color:'#000',
        width:width-120,
        fontSize:20,
      },
      tempData:{
        paddingHorizontal:10,
        borderRadius:8,
        maxWidth:width-20,
        minWidth:width/2,
        height:height/5,
        elevation:5,
        backgroundColor:'#D5D4D4'
      },

      whiteColor:{
        color:'#000'
      },

      TempChanger:{
        position:'absolute',
        borderRadius:50,
        width:45,
        height:45,
        backgroundColor:'#fff',
        elevation:10,
        right:-15,
        top:-15,
      },

      

})