import React, { useEffect } from 'react'
import {View,Text, Image,ScrollView, TouchableOpacity,Dimensions} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { changeHaveCart, deleteCart } from '../store/actions/shop'

export const CartScreen = () =>{

    const {width,height} = Dimensions.get('screen')

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(changeHaveCart())
    },[])

    const cart = useSelector(state=>state.shop.cartProduct)
    const totalPrice = useSelector(state=>state.shop.totalPrice)
    const totalCount = useSelector(state=>state.shop.totalCount)

    const deleteProduct = (item) =>{
        dispatch(deleteCart(item))
    }

    return(
        <View style={{flex:1,backgroundColor:'#fff',height:'100%'}}>
            {!cart.length ? <Text style={{textAlign:'center',fontSize:25,marginVertical:100}}>Корзина пуста</Text> : 
                
                    <ScrollView style={{flexDirection:'column',backgroundColor:'#fff'}}>

                        {cart.map((item,index)=>{
                            return(
                                <View key={item.id} style={{marginVertical:15,flexDirection:'row'}}>
                        <View>
                            <Image
                                source={item.image}
                                resizeMode="contain"
                                style={{
                                    width:200,
                                    height:150
                                }}
                            />
                        </View>
                        <View style={{paddingTop:10}}>
                            <Text style={{marginBottom:2,fontSize:15}}>Товар: {item.name}</Text>
                            <Text style={{marginBottom:2,fontSize:15}}>Цена: {item.price}$</Text>
                            <Text style={{marginBottom:2,fontSize:15}}>Кол-во: {item.count}</Text>
                            <Text style={{marginBottom:2,fontSize:15}}>Категория: {item.category}</Text>

                            <TouchableOpacity onPress={()=>deleteProduct(item)}>
                                <View style={{width:100,padding:10,backgroundColor:'#012e4c',borderRadius:10,marginTop:20}}>
                                    <Text style={{color:'#fff',fontSize:15,textAlign:'center'}}>
                                        Удалить
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>
                   
                            )
                        })}    
                    
                     <View style={{paddingTop:50,backgroundColor:'#eceff1',borderTopLeftRadius:25,borderTopRightRadius:25,width:width-30,height:'50%',alignItems:'center',marginHorizontal:15,marginTop:20,marginBottom:20,flexDirection:'column'}}>
                        <View style={{width:'90%'}}>
                            <View style={{justifyContent:'space-between',flexDirection:'row'}}>
                                <Text style={{fontSize:20,fontFamily:'Imperial',fontWeight:'bold'}}>Итог: </Text>
                                <Text style={{fontSize:20,fontFamily:'Imperial',fontWeight:'500'}}>{totalPrice}$</Text>
                            </View>

                            <View style={{justifyContent:'space-between',marginTop:15,flexDirection:'row'}}>
                                <Text style={{fontSize:20,fontFamily:'Imperial',fontWeight:'bold'}}>Кол-во: </Text>
                                <Text style={{fontSize:20,fontFamily:'Imperial',fontWeight:'500'}}>{totalCount} шт</Text>
                            </View>
                        </View>
                        <TouchableOpacity>
                            <View style={{width:150,padding:10,borderRadius:10,marginTop:40,backgroundColor:'black'}}>
                                <Text style={{fontSize:18,color:'#fff',textAlign:'center'}}>
                                    Приобрести
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    </ScrollView>    
                
            }

            
        </View>
    )
}