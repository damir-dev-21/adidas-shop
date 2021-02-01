import React, { useState } from 'react'
import {Provider} from 'react-redux'
import { View,Text, StyleSheet } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import MainTabs from './src/navigation'

import AppLoading from 'expo-app-loading'
import {AsyncLoad} from './src/AsyncLoad'
import { DrawerContent } from './src/screens/DrawerContent'
import reducers from './src/store/index'

const Drawer = createDrawerNavigator()

export default App = () =>{
  
    const [isReady,setIsReady] = useState(false)

    if(!isReady){
        return(
            <AppLoading
                startAsync={AsyncLoad}
                onFinish={()=>setIsReady(true)}
                onError={e=>console.log(e)}
            />
        )
    }
  
    return(
        <Provider store={reducers}>
        <NavigationContainer>
            <Drawer.Navigator drawerContent={props=><DrawerContent {...props}/>}>
                  <Drawer.Screen name="HomeDrawer" component={MainTabs}/>
            </Drawer.Navigator>
        </NavigationContainer>
        </Provider>
      
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})