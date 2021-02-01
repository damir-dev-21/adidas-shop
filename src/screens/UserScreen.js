import React from 'react'
import {View,Image,Text, ImageBackground} from 'react-native'

export const UserScreen = () =>{

    return(
        <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#fff',height:'100%'}}>
            <ImageBackground source={require('../../assets/image/mens/men1.jpg')} resizeMode="cover"
                style={{
                    width:'85%',
                    height:250,
                    alignItems:'center',
                    position:'relative'
                    
                }}
            >
                <Image
                    source={require('../../assets/image/new.jpg')}
                    resizeMode="contain"
                    style={{
                        width:100,
                        height:100,
                        position:'absolute',
                        right:0
                    }}
                />
                <View style={{width:100,padding:6,backgroundColor:'#01dad7',borderRadius:6,position:'absolute',bottom:-15,}}>
                    <Text style={{textAlign:'center',fontSize:18,color:'#fff'}}>
                        Открыть
                    </Text>
                </View>
            </ImageBackground>
            <ImageBackground source={require('../../assets/image/womans/woman1.jpg')} resizeMode="cover"
                style={{
                    width:'85%',
                    height:250,
                    position:'relative',
                    marginVertical:30,
                    alignItems:'center'
                }}
            >
                <Image
                    source={require('../../assets/image/new.jpg')}
                    resizeMode="contain"
                    style={{
                        width:100,
                        height:100,
                        position:'absolute',
                        right:0
                    }}
                />
                <View style={{width:100,padding:6,backgroundColor:'#01dad7',borderRadius:6,position:'absolute',bottom:-15,}}>
                    <Text style={{textAlign:'center',fontSize:18,color:'#fff'}}>
                        Открыть
                    </Text>
                </View>
            </ImageBackground>
        </View>
    )
}