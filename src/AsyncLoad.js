import * as Font from 'expo-font'

export async function AsyncLoad(){
    try{
        await Font.loadAsync({
            'Roboto':require('../assets/fonts/Roboto-Light.ttf'),
            'Imperial':require('../assets/fonts/Imperial-Bold-Italic_23685.ttf')
        })
    }catch(e){
        console.log(e)
    }
}