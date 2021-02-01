import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/FontAwesome5'
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon4 from 'react-native-vector-icons/Foundation'

import {HomeScreen} from '../screens/HomeScreen'
import {FavoriteScreen} from '../screens/FavoriteScreen'
import {CartScreen} from '../screens/CartScreen'
import {UserScreen} from '../screens/UserScreen'
import { Image, View,Text } from 'react-native'
import { CategoryScreen } from '../screens/CategoryScreen'
import { ProductScreen } from '../screens/ProductScreen'
import { PushMessageScreen } from '../screens/PushMessage'
import { useSelector } from 'react-redux'

const Tabs = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const FavoriteStack = createStackNavigator();
const CartStack = createStackNavigator();
const NewsStack = createStackNavigator();

const optionsTabs = {
    showLabel:false,
    style:{
        height:'8%',
        backgroundColor: '#ffffff'
    }
}



const MainTabs = ()=>{

    const cart = useSelector(state=>state.shop.haveCart)

    return(
    <Tabs.Navigator tabBarOptions={optionsTabs} initialRouteName="Home" 
        screenOptions={({route})=>({
            tabBarIcon:({focused})=>{
                const tintColor = focused ?'#3deae7' : '#1a425d'

                switch(route.name){
                    case 'Home':
                        return(
                            <Icon name="ios-home" color={tintColor} size={28}/>
                        )
                    case 'Favorite':
                        return(
                            <Icon name="heart-outline" color={tintColor} size={28}/>
                        )    
                    case 'Cart':
                        return(
                            <View>
                                <Icon3 name="shopping-outline" color={tintColor} size={28}/>
                                {cart ? <View style={{position:'absolute',bottom:0,right:0,width:10,height:10,borderRadius:50,backgroundColor:'#3deae7'}}></View> : <View></View>}
                            </View>
                            )     
                    case 'User':
                        return(
                            <Icon4 name="burst-new" color={tintColor} size={30}/>
                        )        
                }
            }
        })}
    >
        <Tabs.Screen name="Home" component={HomeStackScreen}/>
        <Tabs.Screen name="Favorite" component={FavoriteStackScreen}/>
        <Tabs.Screen name="Cart" component={CartStackScreen}/>
        <Tabs.Screen name="User" component={NewsStackScreen}/>
    </Tabs.Navigator>
)}

export default MainTabs

const HomeStackScreen = ({navigation}) =>(
    <HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#012e4c',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
            title:<View><Image source={require('../../assets/image/logo.png')}  resizeMode="center"/></View>,
            headerTitleContainerStyle:{position:'absolute',top:-20,width:130,height:150},
            headerTitleAlign:'center',
            headerLeft:()=>(
                <Icon name="ios-menu" style={{marginLeft:10}} size={25} backgroundColor="#fff" color={'#fff'} onPress={()=>navigation.openDrawer()}></Icon>
            ),
            headerRight:()=>(
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Icon name="cart-outline" size={25} color="#fff" onPress={()=>navigation.navigate('Cart')}/>
                    <Icon2 name="bell" size={23} color="#fff" style={{marginHorizontal:10}} onPress={()=>navigation.navigate('Push')}/>
                    <View style={{width:8,height:8,backgroundColor:'#3deae7',borderRadius:50,position:'absolute',right:12,top:5}}></View>
                </View>
            )
        }}/>

        <HomeStack.Screen name="Category" component={CategoryScreen} 
            options={({route})=>({
                title:route.params.name,headerTitleAlign:'center',
            })}
        />

        <HomeStack.Screen name="Product" component={ProductScreen} 
            options={({route})=>({
                title:route.params.name,headerTitleAlign:'center',
            })}
        />

        <HomeStack.Screen name="Push" component={PushMessageScreen} 
            options={({route})=>({
                title:'Уведомления',headerTitleAlign:'center',
            })}
        />
    </HomeStack.Navigator>
)

const FavoriteStackScreen = ({navigation}) =>(
    <FavoriteStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#012e4c',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <FavoriteStack.Screen name="Favorite" component={FavoriteScreen} options={{
            title:'Избранное',
            headerTitleAlign:'center',            
        }}/>
    </FavoriteStack.Navigator>
)

const CartStackScreen = ({navigation}) =>(
    <CartStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#012e4c',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <CartStack.Screen name="Cart" component={CartScreen} options={{
            title:'Корзина',
            headerTitleAlign:'center'
        }}/>
    </CartStack.Navigator>
)

const NewsStackScreen = ({navigation}) =>(
    <NewsStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#012e4c',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <CartStack.Screen name="User" component={UserScreen} options={{
            title:'Новинки',
            headerTitleAlign:'center'
        }}/>
    </NewsStack.Navigator>
)


