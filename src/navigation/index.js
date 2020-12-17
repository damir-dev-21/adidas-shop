import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/FontAwesome5'
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons'

import {HomeScreen} from '../screens/HomeScreen'
import {FavoriteScreen} from '../screens/FavoriteScreen'
import {CartScreen} from '../screens/CartScreen'
import {UserScreen} from '../screens/UserScreen'
import { Image, View } from 'react-native'

const Tabs = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();

const optionsTabs = {
    showLabel:false,
    style:{
        height:'8%',
        backgroundColor: '#ffffff'
    }
}

const MainTabs = ()=>(
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
                                <View style={{position:'absolute',bottom:0,right:0,width:10,height:10,borderRadius:50,backgroundColor:'#3deae7'}}></View>
                            </View>
                            )     
                    case 'User':
                        return(
                            <Icon2 name="user-circle" color={tintColor} size={26}/>
                        )        
                }
            }
        })}
    >
        <Tabs.Screen name="Home" component={HomeStackScreen}/>
        <Tabs.Screen name="Favorite" component={FavoriteScreen}/>
        <Tabs.Screen name="Cart" component={CartScreen}/>
        <Tabs.Screen name="User" component={UserScreen}/>
    </Tabs.Navigator>
)

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
                    <Icon name="cart-outline" size={25} color="#fff"/>
                    <Icon2 name="bell" size={23} color="#fff" style={{marginHorizontal:10}}/>
                    <View style={{width:8,height:8,backgroundColor:'#3deae7',borderRadius:50,position:'absolute',right:12,top:5}}></View>
                </View>
            )
        }}/>
    </HomeStack.Navigator>
)


