import React from 'react'
import {View,StyleSheet} from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'
import {Avatar,Title,Caption,Paragraph,Drawer,Text,TouchableRipple,Switch} from 'react-native-paper'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/Feather';
import Icon4 from 'react-native-vector-icons/FontAwesome5';


export function DrawerContent(props){
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon2 
                                name="md-settings-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Настройки"
                            labelStyle={{color:'#000',fontWeight:'bold',fontFamily:'Roboto'}}
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon3 
                                name="users" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="О нас"
                            onPress={() => {props.navigation.navigate('Home')}}
                            labelStyle={{color:'#000',fontWeight:'bold',fontFamily:'Roboto'}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon2
                                name="share-social-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Поделиться"
                            labelStyle={{color:'#000',fontWeight:'bold',fontFamily:'Roboto'}}
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon2 
                                name="md-help-buoy-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Центр справки и поддержки"
                            labelStyle={{color:'#000',fontWeight:'bold',fontFamily:'Roboto',width:250}}
                            onPress={() => {props.navigation.navigate('BookmarkScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon3 
                                name="phone" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="+99877 198-21-57"
                            labelStyle={{color:'#000',fontWeight:'bold',fontFamily:'Roboto'}}
                            onPress={() => {props.navigation.navigate('SupportScreen')}}
                        />
                    </Drawer.Section>
                    
                </View>
            </DrawerContentScrollView>
            
        </View>
    )
}


const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 10,
      paddingBottom:20,
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 0},
      shadowRadius: 10,
      backgroundColor:'#fff',
      elevation: 3,
    },
    title: {
      fontSize: 22,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 16,
      color:'#01dad7',
      borderWidth:1,
      width:80,
      textAlign:'center',
      paddingVertical:5,
      borderColor:'#01dad7',
      borderRadius:50
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });