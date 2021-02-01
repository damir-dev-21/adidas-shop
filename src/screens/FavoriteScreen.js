import React from 'react'
import {View,Text, Image,Dimensions, TouchableOpacity,ScrollView} from 'react-native'
import { useSelector } from 'react-redux'

export const FavoriteScreen = ({navigation}) =>{

    const favorites = useSelector(state=>state.shop.favoriteProduct)

    const {width,height} = Dimensions.get('screen')

    return(
        <ScrollView style={{backgroundColor:'#fff',height}}>
            {!favorites.length 
                ? 
                <Text style={{marginTop:50,textAlign:'center',fontWeight:'bold',fontSize:22}}>Избранных нет</Text> 
                : 
                favorites.map(item=>{
                    return(
                        <View key={item.id} style={{alignItems:'center',justifyContent:'center',marginVertical:10}}>
                            <Image  
                                source={item.image}
                                resizeMode="contain"
                                style={{
                                    width:width-20,
                                    height:220
                                }}
                            />
                            <TouchableOpacity onPress={()=>navigation.navigate('Product',{
                                item:item
                            })}>
                                <View style={{width:100,padding:8,backgroundColor:'#01dad7',borderRadius:12}}>
                                    <Text style={{fontSize:18,color:'#fff',textAlign:'center'}}>
                                        Открыть
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                })}
        </ScrollView>
    )
}
