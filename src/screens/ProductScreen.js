import React, { useEffect, useState } from 'react'
import {View,Text,Image,Dimensions, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { useDispatch } from 'react-redux'
import { addCart, addFavorite } from '../store/actions/shop'

export function ProductScreen({route,navigation}){
    
    const {width,height} = Dimensions.get('screen')

    const dispatch = useDispatch()

    const [data,setData] = useState({})
    const [count,setCount] = useState(1)
    const [like,setLike] = useState(false)

    useEffect(()=>{
        const {item} = route.params
        setData(item)
    },[data])

    const changeCount = (param) =>{
        if(count > 0){
            if(param === '-' && count > 1){
                let newCount = count - 1
                setCount(newCount)
            }else if(param === '+'){
                let newCount = count + 1
                setCount(newCount)
            }        
        }
    }

    const addHandlerToCart = (item) =>{
        const newData = {
            name:item.name,
            image:item.image,
            price:item.price,
            category:route.params.category,
            count:count,
            id:Math.random().toString()         
        }

        dispatch(addCart(newData))
    }

    const addFavor = (item) =>{
        dispatch(addFavorite(item))
    }

    return(
        <View style={{backgroundColor:'#fff',height}}>
            <View style={{paddingLeft:10}}>
                <Image source={data.image} resizeMode='contain' style={{position:'relative',width:width-20,height:250}}/>
                <TouchableOpacity onPress={()=>setLike(!like)} style={{position:'absolute',right:30,top:30}}>
                        {like ? <Icon name="star" size={35} color="#ff9800"/> : <Icon name="staro" size={35} color="#ff9800"/>}
                </TouchableOpacity>
            </View>
            <View style={{paddingHorizontal:15}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={{fontSize:20}}>Название:</Text>
                    <Text style={{fontSize:20,textTransform:'uppercase',fontWeight:'500'}}>{data.name}</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15,alignItems:'center'}}>
                     <Text style={{fontSize:20}}>Категория:</Text>
                     <Text style={{fontSize:20,textTransform:'uppercase',fontWeight:'500'}}>{route.params.category}</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15,alignItems:'center'}}>
                    <Text style={{fontSize:20}}>Количество:</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <TouchableOpacity onPress={()=>changeCount('-')}>
                            <Icon name="minuscircleo" size={24} color="black"/>
                        </TouchableOpacity>
                        <Text style={{fontSize:18,marginHorizontal:12}}>{count}</Text>
                        <TouchableOpacity onPress={()=>changeCount('+')}>
                            <Icon name="pluscircleo" size={24} color="black"/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15,alignItems:'center'}}>
                    <Text style={{fontSize:20}}>Цена:</Text>
                    <Text style={{fontSize:20,textTransform:'uppercase',fontWeight:'500'}}>{data.price}$</Text>
                </View>
            </View>

            <TouchableOpacity onPress={()=>addFavor(data)}>
                <View style={{backgroundColor:'#ff9800',width:width-50,height:40,borderRadius:10,marginHorizontal:25,marginTop:50}}>
                    <Text style={{fontSize:18,color:'white',textAlign:'center',paddingTop:7}}>Добавить в избранное</Text>
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={()=>addHandlerToCart(data)}>
                <View style={{backgroundColor:'#000',width:width-50,height:40,borderRadius:10,marginHorizontal:25,marginTop:15}}>
                    <Text style={{fontSize:18,color:'white',textAlign:'center',paddingTop:7}}>Добавить в корзину</Text>
                </View>
            </TouchableOpacity>
            
        </View>
    )
}