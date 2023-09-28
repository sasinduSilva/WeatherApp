import { StyleSheet, Text, View,FlatList,Image } from 'react-native'
import React from 'react'
import Colors from '../config/Colors';

export default function DailyForcast() {
    const data = [
        {id:'1',date:'12/01',day:'Wednsday',temp:'28',maxTemp:'28',minTemp:'25'},
        {id:'2',date:'12/01',day:'Wednsday',temp:'28',maxTemp:'28',minTemp:'25'},
        {id:'3',date:'12/01',day:'Wednsday',temp:'28',maxTemp:'28',minTemp:'25'},
        {id:'4',date:'12/01',day:'Wednsday',temp:'28',maxTemp:'28',minTemp:'25'},
        {id:'5',date:'12/01',day:'Wednsday',temp:'28',maxTemp:'28',minTemp:'25'},
        {id:'6',date:'12/01',day:'Wednsday',temp:'28',maxTemp:'28',minTemp:'25'},
      ];
    
      const renderItem = ({item}) =>(
        <View style={{
            // borderWidth:1,
            // borderColor:'black',
            flexDirection:'row',
            justifyContent:'space-between',
            padding:10
            }}>
        {/* date */}
          <View>
          <Text style={{color:'black'}}>{item.day}</Text>
          <View style={{flexDirection:'row',alignItems:'center'}}>
          <Image
                source={require('../assets/icons/calendar.png')}
                style={{
                    width:35,
                    height:35,
                    
                }}
            />
            <Text>{item.date}</Text>
          </View>
          </View>
          {/* temp */}
          <View>
          
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Text>{item.temp}&#8451;</Text>
          <Image
                source={require('../assets/openWeatherIcons/10d.png')}
                style={{
                    width:35,
                    height:35,
                    
                }}
            />
            
          </View>
          <Text style={{color:Colors.GRAY}}>LIGHT RAIN</Text>
          </View>
          {/* min/max temp */}
          <View>
          
          <View style={{flexDirection:'row',alignItems:'center'}}>
            
          <Image
                source={require('../assets/openWeatherIcons/img_1.png')}
                style={{
                    width:35,
                    height:35,
                    
                }}
            />
            <View>
                <Text style={{color:Colors.ORANGE}}>Max {item.maxTemp}</Text>
                <Text style={{color:Colors.BLUE_ONE}}>Min {item.minTemp}</Text>
            </View>
            
          </View>
          
          </View>
        </View>
      )
  return (
    <View style={{
        flex:1,
        margin:30,
        // alignItems:'center',
        // borderWidth:1,
        // borderColor:'black',
        // padding:20
        
        
    }}>
        <View style={{alignItems:'center'}}>
        <Text style={{fontSize:22, color:Colors.DARK, fontWeight:'500'}}>Daily Weather Forcast</Text>
        </View>
      <FlatList
        data={data}
        renderItem={(item)=>renderItem(item)}
        keyExtractor={(item)=>item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({})