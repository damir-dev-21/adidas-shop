import React, { useState,useEffect } from 'react'
import {View,Text,StatusBar, StyleSheet, ImageBackground,ScrollView, TouchableOpacity,Dimensions, Image} from 'react-native'
import { fakeData } from '../constants'

export const HomeScreen = ({navigation}) =>{

    const {width,height} = Dimensions.get('screen')

    const [data,setData] = useState([])

    let mens,womans,childs;

    useEffect(()=>{
        setData(fakeData)
    },[data])

    mens = data.filter(item=>item.category === 0)
    womans = data.filter(item=>item.category === 1)
    childs = data.filter(item=>item.category === 2)


    return(
        <View style={styles.container}>
            <StatusBar backgroundColor="#012e4c" barStyle="light-content"/>
            <ScrollView style={{padding:10}}>
                <ImageBackground resizeMode="contain" style={{width:width-20,height:200}} source={require('../../assets/image/category/mens.png')}>
                    <View style={{flexDirection:'column',justifyContent:'center',marginTop:20,marginLeft:10}}>
                        <Text style={{fontFamily:'Imperial',color: '#012e4c',fontSize:28}}>Men's Shoes</Text>
                        <Text style={{fontFamily:'Roboto',fontSize:15,color:'#000'}}>Spring’s New Arrival</Text>
                        <Text style={{fontSize:22,color:'#012e4c',fontFamily:'Roboto',marginTop:5}}>Collection</Text>
                        <TouchableOpacity onPress={()=>navigation.navigate('Category',{
                            name:'Мужская',
                            data:mens
                        })}>
                            <View style={{marginTop:20,backgroundColor: '#01dad7',width:100,padding:8,borderRadius:50}}>
                                <Text style={{textAlign:'center',color:'#f7f7f7',fontSize:16}}>Shop Now</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>

                <View style={{
                    flexDirection:'row',
                    justifyContent:'center',
                    shadowColor: 'black',
                    shadowOpacity: 0.26,
                    shadowOffset: { width: 0, height: 2},
                    shadowRadius: 10,
                    backgroundColor:'white',
                    elevation: 3,
                    marginVertical:15,
                    paddingTop:5,
                    paddingBottom:10
                }}>
                    <View style={{alignItems:'center'}}>
                        <Image source={require('../../assets/image/category/men.png')} resizeMode="contain" style={{width:80,height:50,borderRadius:50}}/>
                        <Text style={{marginTop:10}}>Men</Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <Image source={require('../../assets/image/category/woman.png')} resizeMode="contain" style={{width:80,height:50,borderRadius:50}}/>
                        <Text style={{marginTop:10}}>Women</Text>
                    </View>
                    
                    <View style={{alignItems:'center'}}>
                        <Image source={require('../../assets/image/category/child.png')} resizeMode="contain" style={{width:80,height:50,borderRadius:50}}/>
                        <Text style={{marginTop:10}}>Kids</Text>
                    </View>
                </View>
            
                <View>
                <ImageBackground resizeMode="contain" style={{width:width-20,height:160,shadowColor: 'black',
                    shadowOpacity: 0.26,
                    shadowOffset: { width: 0, height: 0},
                    shadowRadius: 10,
                    backgroundColor:'#f3f5f4',
                    elevation: 3,}} source={require('../../assets/image/category/womens.png')}>
                    <View style={{flexDirection:'column',justifyContent:'center',alignItems:'flex-end',marginTop:20,marginRight:10}}>
                        <Text style={{fontFamily:'Imperial',color: '#012e4c',fontSize:28}}>WomenBoots</Text>
                        <Text style={{fontSize:15,color:'#000'}}>Spring’s New Arrival</Text>
                        <TouchableOpacity onPress={()=>navigation.navigate('Category',{
                            name:'Женская',
                            data:womans
                        })}>
                            <View style={{marginTop:15,backgroundColor: '#01dad7',width:100,padding:8,borderRadius:50}}>
                                <Text style={{textAlign:'center',color:'#f7f7f7',fontSize:16}}>Shop Now</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
                </View>

                <ImageBackground resizeMode="contain" style={{width:width-20,height:180}} source={require('../../assets/image/category/childs.png')}>
                    <View style={{flexDirection:'column',justifyContent:'center',marginTop:30,marginLeft:10}}>
                        <Text style={{fontFamily:'Imperial',color: '#012e4c',fontSize:28}}>Kids Fashion</Text>
                        <Text style={{fontSize:15,color:'#000'}}>Spring’s New Arrival</Text>
                        <TouchableOpacity onPress={()=>navigation.navigate('Category',{
                            name:'Детская',
                            data:childs
                        })}>
                            <View style={{marginTop:20,backgroundColor: '#01dad7',width:100,padding:8,borderRadius:50}}>
                                <Text style={{textAlign:'center',color:'#f7f7f7',fontSize:15}}>Shop Now</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff'
    }
})