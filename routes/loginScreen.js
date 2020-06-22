import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native'

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/covid.jpg')} style={styles.ImageBackground} >
                <View style={{flex:1, backgroundColor:'rgba(0,0,0,.6)'}}>
                    <Text style={styles.title}>COVERS</Text>
                    <Text style={{color:'white',fontSize:15, fontWeight:'bold'}}>(COVID-19 EMERGENCY RESPONSE SOLUTION)</Text>
                    <Text style={{color:'white'}}>
                        Join the effort by well meaning Africans using technology to slow down
                        and eventually halt the spread of  COVID-19. 
                    </Text>
                    <View style={{marginTop:20}}>
                        <TextInput style={styles.TextInput} placeholder='Phone Number' keyboardType={'numeric'}/>
                        <TextInput style={styles.TextInput} placeholder='Pin' keyboardType={'numeric'}/>
                        <TouchableOpacity style={styles.button}>
                            <Text style={{color:'white'}}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1 
    },
    ImageBackground:{
        flex:1,
        resizeMode:'cover',
        paddingHorizontal:15,
        paddingVertical:70
    },
    TextInput:{
        padding:8,
        backgroundColor:'white',
        marginBottom:8,
        
    },
    button:{
        paddingVertical:12,
        backgroundColor:'grey',
        alignItems:'center',
        borderRadius:5
    }, 
    title:{
        color:'white',
        fontSize:60, 
        textAlign:'center',
        fontWeight:'bold',
    }
})
