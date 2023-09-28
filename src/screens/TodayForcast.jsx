import { StyleSheet, Text, View,ImageBackground,Image } from 'react-native'
import React,{useEffect,useState} from 'react'
import Colors from '../config/Colors';
import axios from 'axios';

export default function TodayForcast() {
    const [cityName,setCityName] = useState('');
    const [temprature,setTemp] = useState('');
    const [description,setDesc] = useState('');
    const [img,setImg] = useState(require('../assets/openWeatherIcons/01d.png'));
    const [maxTemp,setMaxTemp] = useState('');
    const [humidity,setHumidity] = useState('');
    const [wind,setWind] = useState('');

    



    useEffect(()=>{
        getForecast();

    },[]);

    const getForecast =async() =>{
        const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=6.042646&lon=80.238750&appid=9b98af24492e17c4b524a65d593a28de';

        axios.get(apiUrl).then(response =>{
            setCityName(response.data.name)
            const tempNum = Math.floor(response.data.main.temp / 10);
            setTemp(tempNum)
            setDesc(response.data.weather[0].description);
            console.log(response.data.wind.speed);
            setMaxTemp(Math.floor(response.data.main.temp_max /10));
            getWeatherIcon(response.data.weather[0].icon)
            setHumidity(response.data.main.humidity);
            setWind(response.data.wind.speed)
            
        }).catch(error => {
            console.log('Error', error);
        })

    }

    const getWeatherIcon = (icon) =>{
        
        if(icon == '01d'){
            setImg(require('../assets/openWeatherIcons/01d.png'))
        }else if(icon == '02d'){
            setImg(require('../assets/openWeatherIcons/02d.png'))
        }else if(icon == '02n'){
            setImg(require('../assets/openWeatherIcons/02n.png'))
        }else if(icon == '03d'){
            setImg(require('../assets/openWeatherIcons/03d.png'))
        }else if(icon == '03n'){
            setImg(require('../assets/openWeatherIcons/03n.png'))
        }else if(icon == '04d'){
            return require('../assets/openWeatherIcons/04d.png')
        }else if(icon == '04n'){
            return require('../assets/openWeatherIcons/04n.png')
        }else if(icon == '09d'){
            setImg(require('../assets/openWeatherIcons/09d.png'))
        }else if(icon == '09n'){
            setImg(require('../assets/openWeatherIcons/09n.png'))
        }else if(icon == '10d'){
            setImg(require('../assets/openWeatherIcons/10d.png'))
        }else if(icon == '10n'){
            setImg(require('../assets/openWeatherIcons/10n.png'))
        }else if(icon == '11d'){
            setImg(require('../assets/openWeatherIcons/11d.png'))
        }else if(icon == '11n'){
            setImg(require('../assets/openWeatherIcons/11n.png'))
        }else if(icon == '13d'){
            setImg(require('../assets/openWeatherIcons/13d.png'))
        }else if(icon == '13n'){
            setImg(require('../assets/openWeatherIcons/13n.png'))
        }else if(icon == '50d'){
            setImg(require('../assets/openWeatherIcons/50d.png'))
        }else if(icon == '50n'){
            setImg(require('../assets/openWeatherIcons/50n.png'))
        }else {
            setImg(require('../assets/openWeatherIcons/03d.png'))
        }

    }

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
            <Text style={{fontSize:26, color:'white', fontWeight:'400'}}>{cityName == ''?  'GALLE': cityName}</Text>
            </View>
            <View>
                <Text
                    style={{color:'white',fontSize:17}}
                >Wed 12 January 11:26 AM</Text>
            </View>
            <View style={{flexDirection:'row', alignItems:'center',bottom:22}}>
                <Text 
                    style={{color:'white',fontSize:130,fontWeight:'400'}}
                >{temprature == '' ? '28' : temprature}</Text>
                <View>
                <Image
                source={require('../assets/icons/celcius.png')}
                style={{
                    width:30,
                    height:40,
                    
                }}
            />
                <Image
                source={require('../assets/openWeatherIcons/10d.png')}
                style={{
                    width:75,
                    height:50,
                    
                }}
            />
                </View>
                
            </View>
            <View>
                    <Text style={{fontSize:28,color:'white', fontWeight:'600', bottom:43}}>{description == '' ? 'SCATTERED CLOUDS' : description}</Text>
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
                <Text style={{color:Colors.DARK,fontWeight:'400',fontSize:18}}>{maxTemp == '' ? '28' : maxTemp} &#8451;</Text>
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
                <Text style={{color:Colors.DARK,fontWeight:'400',fontSize:18}}>{humidity} %</Text>
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
                <Text style={{color:Colors.DARK,fontWeight:'400',fontSize:18}}>{wind} m/s</Text>
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