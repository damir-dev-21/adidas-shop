import React, { useEffect, useState } from 'react'
import { 
    View, 
    Text,
    ScrollView,
    StyleSheet,
    FlatList,
    Image,
    Dimensions,
    Animated,
    ImageBackground,
    TouchableOpacity
} from 'react-native'



export const CategoryScreen = ({route,navigation}) =>{

    const scrollX = React.useRef(new Animated.Value(0)).current;

    const {data} = route.params
    const sliderImage = data[0].sliderImage

    const {width,height} = Dimensions.get('screen')

    const [dataSlider,setDataSlider] = useState(sliderImage);
    

    const changeSelectHandler = (index) =>{
        const sliderImage = data[index].sliderImage
        setDataSlider(sliderImage)
    }
    
    const Indicator = ({scrollX}) =>{
 
    return(
      <View style={{position:"relative",flexDirection:"row",justifyContent:'center',marginTop:0}}>
        {data.map((_,i)=>{
          const inputRange = [(i-1) * width, i * width, (i+1)*width];
  
           const scale = scrollX.interpolate({
            inputRange,
            outputRange:[0.9,1.2,0.9],
            extrapolate:'clamp'
          })
          return(
            <Animated.View key={`indicator-${i}`}
              style={{
                height:10,
                width:10,
                borderRadius:5,
                backgroundColor:'#0ed9d6',
                margin:5,
                transform:[
                  {
                    scale,
                  }
                ]
              }}
            >
  
            </Animated.View>
          )
        })}
      </View>
    )
    };


    const renderItem = ({item}) =>{
        return(
            <View style={{flexDirection:'column'}} key={item.id}>
            <View>
                <Image
                    source={item.image}
                    style={{
                        width:width-20,
                        height:240,
                        marginHorizontal:10
                    }}
                    resizeMode="contain"
                />
            </View>
            <View style={{flexDirection:'column',paddingHorizontal:15}}>
                    <View style={{flexDirection:'row',justifyContent:'center',position:'relative',bottom:40,alignItems:'center'}}>
                        <TouchableOpacity onPress={()=>navigation.navigate('Product',{
                            name:item.name,
                            item:item,
                            category:route.params.name
                        })}>
                                <View style={{backgroundColor:'#0ed9d6',width:50,height:50,paddingTop:8,borderRadius:50}}>
                                    <Text style={{fontSize:25,color:'#fff',textAlign:'center'}}>+</Text>
                                </View>
                        </TouchableOpacity>
                    </View>
                   
            </View>
        </View>
        )
    }

    const renderProductItem = ({item,index}) =>{
        return(
            <TouchableOpacity onPress={()=>changeSelectHandler(index)}>
                <View style={{marginRight:20,borderWidth:1,borderRadius:10}}>
                    <ImageBackground style={{width:180,height:180}} source={item.image} resizeMode="cover">
                        
                    </ImageBackground>
                </View>
            </TouchableOpacity>
        )
    }

    return(
        <ScrollView style={[styles.container,{height}]}>
            <View style={{borderBottomWidth:0.5,paddingBottom:15}}>
                <Animated.FlatList
                    data={dataSlider}
                    keyExtractor={item=>`${item.id}`}
                    scrollEventThrottle={32}
                    onScroll={Animated.event(
                      [{nativeEvent:{contentOffset:{x:scrollX}}}],
                      {useNativeDriver:false}
                    )}
                    horizontal
                    renderItem={renderItem}
                    showsHorizontalScrollIndicator={false}
                />
                <Indicator scrollX={scrollX}/>
            </View>
            <View style={{marginTop:20,paddingHorizontal:15}}>
                <Text style={{color: '#001f33',fontSize:20,fontFamily:'Imperial'}}>You may like</Text>
                    
                    <View style={{width,marginTop:20}}>
                        <FlatList
                            data={data}
                            renderItem={renderProductItem}
                            keyExtractor={item=>`${item.id}`}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />  
                    </View>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#ffffff',
    }
})