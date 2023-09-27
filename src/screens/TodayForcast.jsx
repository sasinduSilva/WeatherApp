import { StyleSheet, Text, View,ImageBackground,Image } from 'react-native'
import React from 'react'
import Colors from '../config/Colors';

export default function TodayForcast() {
    const temp = 28;
  return (
    <ImageBackground
        source={require('../assets/BGImages/1.jpg')}
        style={styles.background}
    >
        <View style={{flexDirection:'row',flex:1,justifyContent:'space-between'}}> 
        <View style={{padding:10, flexDirection:'row'}}>
            <Image
                source={require('../assets/icons/sidebar_open.png')}
                style={{
                    width:40,
                    height:40
                }}
            />
            <Image
                source={require('../assets/icons/refresh.png')}
                style={{
                    width:40,
                    height:40
                }}
            />
        </View>
        <View style={{padding:10, flexDirection:'row'}}>
        <Image
                source={require('../assets/icons/favourites.png')}
                style={{
                    width:40,
                    height:40
                }}
            />
            <Image
                source={require('../assets/icons/search.png')}
                style={{
                    width:40,
                    height:40
                }}
            />
        </View>
        </View>
        {/* main details */}
        <View style={{
            // borderWidth:1,
            // borderColor:'back',
            // bottom:320,
            alignItems:'center',
            justifyContent:'center'
        }}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image
                source={require('../assets/icons/location.png')}
                style={{
                    width:30,
                    height:40,
                    margin:5
                }}
            />
            <Text style={{fontSize:26, color:'white', fontWeight:'400'}}>GALLE</Text>
            </View>
            <View>
                <Text
                    style={{color:'white',fontSize:17}}
                >Wed 12 January 11:26 AM</Text>
            </View>
            <View style={{flexDirection:'row', alignItems:'center',bottom:22}}>
                <Text 
                    style={{color:'white',fontSize:130,fontWeight:'400'}}
                >28</Text>
                <View>
                <Image
                source={require('../assets/icons/celcius.png')}
                style={{
                    width:30,
                    height:40,
                    
                }}
            />
                <Image
                source={require('../assets/openWeatherIcons/03d.png')}
                style={{
                    width:75,
                    height:50,
                    
                }}
            />
                </View>
                
            </View>
            <View>
                    <Text style={{fontSize:28,color:'white', fontWeight:'600', bottom:43}}>SCATTERED CLOUDS</Text>
            </View>
        </View>
        {/* card 1 */}
        <View style={{
            
            margin:15,
            padding:30,
            // bottom:360,
            backgroundColor:'white',
            borderRadius:35
        }}>
            <View
            style={{flexDirection:'row', justifyContent:'space-between'}}
            >
                {/* max temp */}
                <View style={{alignItems:'center'}}>
                <View style={{height:40,width:40}}>
                <Image
                source={require('../assets/openWeatherIcons/img.png')}
                style={{
                    width:'100%',
                    height:'100%',
                    
                }}
            />
                </View>
                <Text style={{color:Colors.GRAY}}>Max Temp</Text>
                <Text style={{color:Colors.DARK,fontWeight:'400',fontSize:18}}>28 &#8451;</Text>
                </View>
                {/* humidity */}
                <View style={{alignItems:'center'}}>
                <View style={{height:40,width:40}}>
                <Image
                source={require('../assets/openWeatherIcons/humidity.png')}
                style={{
                    width:'100%',
                    height:'100%',
                    
                }}
            />
                </View>
                <Text style={{color:Colors.GRAY}}>Humidity</Text>
                <Text style={{color:Colors.DARK,fontWeight:'400',fontSize:18}}>67 %</Text>
                </View>
                {/* wind */}
                <View style={{alignItems:'center'}}>
                <View style={{height:40,width:40}}>
                <Image
                source={require('../assets/openWeatherIcons/wind.png')}
                style={{
                    width:'100%',
                    height:'100%',
                    
                }}
            />
                </View>
                <Text style={{color:Colors.GRAY}}>Wind</Text>
                <Text style={{color:Colors.DARK,fontWeight:'400',fontSize:18}}>2.51 m/s</Text>
                </View>

            </View>
        </View>
        {/* card two */}
        <View style={{
            
            margin:15,
            padding:20,
            marginBottom:200,
            backgroundColor:'white',
            borderRadius:35
        }}>
            <View
            style={{flexDirection:'row', justifyContent:'space-between'}}
            >
                {/* time 1 */}
                <View style={{alignItems:'center'}}>
                <Text style={{color:Colors.DARK,fontWeight:'400',fontSize:18}}>28.68 &#8451;</Text>
                <Text style={{color:Colors.GRAY, fontSize:8}}>SCATTERED CLOUDS</Text>
                <View style={{height:40,width:60}}>
                
                <Image
                source={require('../assets/openWeatherIcons/03d.png')}
                style={{
                    width:'100%',
                    height:'100%',
                    
                }}
            />
                </View>
                
                <Text style={{color:Colors.GRAY, fontSize:18, fontWeight:'500'}}>11:30 AM</Text>
                </View>
                {/* time 2 */}
                <View style={{alignItems:'center'}}>
                <Text style={{color:Colors.DARK,fontWeight:'400',fontSize:18}}>28.68 &#8451;</Text>
                <Text style={{color:Colors.GRAY, fontSize:8}}>SCATTERED CLOUDS</Text>
                <View style={{height:40,width:60}}>
                
                <Image
                source={require('../assets/openWeatherIcons/03d.png')}
                style={{
                    width:'100%',
                    height:'100%',
                    
                }}
            />
                </View>
                
                <Text style={{color:Colors.GRAY, fontSize:18, fontWeight:'500'}}>12:30 PM</Text>
                </View>
                {/* time 3 */}
                <View style={{alignItems:'center'}}>
                <Text style={{color:Colors.DARK,fontWeight:'400',fontSize:18}}>28.68 &#8451;</Text>
                <Text style={{color:Colors.GRAY, fontSize:8}}>BROKEN CLOUDS</Text>
                <View style={{height:40,width:60}}>
                
                <Image
                source={require('../assets/openWeatherIcons/04d.png')}
                style={{
                    width:'100%',
                    height:'100%',
                    
                }}
            />
                </View>
                
                <Text style={{color:Colors.GRAY, fontSize:18, fontWeight:'500'}}>1:30 PM</Text>
                </View>

            </View>
        </View>
    </ImageBackground>
    
  )
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        resizeMode:'cover'
    },
    container:{
        flex:1,
        
    },
    headContainer:{},
})