import React, { useState } from 'react'
import { View,Text, StyleSheet } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import MainTabs from './src/navigation'

import AppLoading from 'expo-app-loading'
import {AsyncLoad} from './src/AsyncLoad'

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
      <NavigationContainer>
          <Drawer.Navigator>
                <Drawer.Screen name="HomeDrawer" component={MainTabs}/>
          </Drawer.Navigator>
      </NavigationContainer>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})